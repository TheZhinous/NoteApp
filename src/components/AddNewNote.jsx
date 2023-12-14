

function AddNewNote() {
    return (
      <div className="add-new-note">
        <h2>Add New Note</h2>
        <form className="note-form">
          <input
            value=""
            type="text"
            placeholder="New Title"
            className="text-field"
          />
          <input
            value=""
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

export default AddNewNote