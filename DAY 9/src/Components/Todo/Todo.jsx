import  { useState } from "react";

import "./todo.css";

function Todo({ title, description, onDelete, id, onUpdate }) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const handleDone = () => {
    onDelete();
  };
  const handleEdit = () => {
    // Reset the input fields when the modal is opened
    setEditedTitle(title);
    setEditedDescription(description);
  };
  const handleSaveChanges = () => {
    // Handle saving changes here
    onUpdate(id, editedTitle, editedDescription);
  };

  return (
    <>
      <div className="todo card my-2">
        <div className="card-header">{title}</div>
        <div className="card-body row ">
          <p className="col-lg-8 card-text m-0">{description}</p>
          <div className="col-lg-4 card-buttons d-flex justify-content-between ">
            <button
              className="btn btn-sm btn-outline-success"
              onClick={handleDone}
            >
              Mark as done
            </button>
            <button
              className="btn btn-sm btn-outline-warning"
              onClick={handleEdit}
              data-bs-toggle="modal"
              data-bs-target={`#editModal${id}`}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {/* Edit Modal  */}
      <div
        className="modal fade"
        id={`editModal${id}`}
        tabIndex="-1"
        aria-labelledby="editModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Change Todo Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Input fields for editing specific todo */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
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
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
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
                data-bs-dismiss="modal"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
