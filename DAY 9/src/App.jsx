import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Todo from "./Components/Todo/Todo";
import "./app.css";

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [
    {
      id: 1,
      title: "Connect with me on LinkedIn",
      description: "https://www.linkedin.com/in/yasir-mansoori/",
    },
    {
      id: 2,
      title: "Check out my Github Profile",
      description: "https://github.com/yasirmansoori",
    },
    {
      id: 3,
      title: "Follow me on Instagram",
      description: "https://www.instagram.com/mansoori_yasir786/",
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });
  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    // localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo item
  const handleAdd = () => {
    if (newTodo.title.trim() !== "") {
      const newTodoItem = {
        id: todos.length + 1,
        title: newTodo.title,
        description: newTodo.description,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo({
        title: "",
        description: "",
      });
    }
  };
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };
  // Update a todo item
  const updateTodo = (id, updatedTitle, updatedDescription) => {
    // Find the index of the todo with the provided id
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    // If the todo is found in the array
    if (todoIndex !== -1) {
      // Create a new todo object with the updated properties
      const updatedTodo = {
        ...todos[todoIndex], // Copy the existing todo properties
        title: updatedTitle,
        description: updatedDescription,
      };

      // Create a new array with the updated todo replacing the old one
      const updatedTodos = [
        ...todos.slice(0, todoIndex), // Todos before the updated todo
        updatedTodo,
        ...todos.slice(todoIndex + 1), // Todos after the updated todo
      ];

      // Set the updated array back to the state
      setTodos(updatedTodos);
    }
  };
  // Delete a todo item
  const handleDone = (id) => {
    // Filter out the todo with the specified id
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // Update the todos state
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom d-flex justify-content-between">
          <span className="fs-4">TODO - Your day to day list app.</span>
          <button
            className="btn btn-sm btn-outline-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add New Todo
          </button>
          {/* <!-- Modal to add a new todo  --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Details for new Todo
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Input fields for new todo */}
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={newTodo.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={newTodo.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAdd}
                    data-bs-dismiss="modal"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          className="p-3 mb-4 bg-body-tertiary rounded-3"
          style={{ minHeight: "355px" }}
        >
          <div className="todo-container container-fluid py-3 overflow-auto">
            {todos.map((todo) => (
              <Todo
                id={todo.id}
                key={todo.id}
                title={todo.title}
                description={todo.description}
                onDelete={() => handleDone(todo.id)}
                onUpdate={updateTodo}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
