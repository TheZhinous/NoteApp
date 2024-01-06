import { useState } from "react";

function AddNewNote({onSetNotes}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleDescInput = (e) => {
    setDescription(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      id: Date.now(),
      title,
      description,
      isCompleted:false,
      createdAt: new Date().toISOString(),
    };
    onSetNotes((prevNotes) => [...prevNotes, newNote]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleFormSubmit}>
        <input
          onChange={handleTitleInput}
          value={title}
          type="text"
          placeholder="New Title"
          className="text-field"
        />
        <input
          onChange={handleDescInput}
          value={description}
          type="text"
          placeholder="New Description"
          className="text-field"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
