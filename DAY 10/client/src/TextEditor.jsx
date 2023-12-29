import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const URL = "http://localhost:3001";

const SAVE_INTERVAL_MS = 2000; // Time interval for saving the document
const TOOLBAR_OPTIONS = [
  // Quill editor toolbar options
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

// Component to render the text editor
export default function TextEditor() {
  // Extract the document ID from the route parameters
  const { id: documentId } = useParams();

  // State for managing the socket connection and Quill instance
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  // Initialize socket connection when component mounts
  useEffect(() => {
    const s = io(URL);
    setSocket(s);

    // Error handling for socket connection
    s.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    return () => {
      s.disconnect();
    };
  }, []);

  // Periodically save the document content to the server
  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, SAVE_INTERVAL_MS);

    // Clean up function to clear the save interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  // Load the document content from the server when the component mounts
  useEffect(() => {
    if (socket == null || quill == null) return;

    // Load the document content once from the server
    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });

    // Request the document content from the server based on the document ID
    socket.emit("get-document", documentId);
  }, [socket, quill, documentId]);

  // Send changes made by the user to the server
  useEffect(() => {
    if (socket == null || quill == null) return;

    // Event handler for tracking text changes in the Quill editor
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };

    // Attach the text change event handler to the Quill editor
    quill.on("text-change", handler);

    // Clean up function to remove the text change event handler
    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  // Receive changes from other users and update the Quill editor
  useEffect(() => {
    if (socket == null || quill == null) return;

    // Event handler for receiving changes from other users
    const handler = (delta) => {
      quill.updateContents(delta);
    };

    // Attach the event handler to handle incoming changes
    socket.on("recieve-changes", handler);

    // Clean up function to remove the event handler when the component unmounts
    return () => {
      socket.off("recieve-changes", handler);
    };
  }, [socket, quill]);

  // Callback function to initialize the Quill editor instance
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    // Create a new Quill editor instance and set initial configuration
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });

    // Disable the editor initially and set a loading message
    q.disable();
    q.setText("Loading...");

    // Set the Quill instance to the state for further use
    setQuill(q);
  }, []);

  // Render the text editor component with a container div and the Quill editor instance
  return <div className="container" ref={wrapperRef}></div>;
}
