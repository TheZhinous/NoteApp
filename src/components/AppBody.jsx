import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import Message from "./Message";

function AppBody({ notes, setNotes, onSortBy }) {
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };
  const handleCheckNote = (e) => {
    const noteId = e.target.value;
    const newNotes = notes.map((n) =>
      n.id == noteId ? { ...n, isCompleted: !n.isCompleted } : n
    );
    setNotes(newNotes);
  };
  let newNote = notes;
  if (onSortBy == "latest") {
    newNote = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (onSortBy == "completed") {
    newNote = [...notes].sort(
      (a, b) => Number(b.isCompleted) - Number(a.isCompleted)
    );
  } else {
    newNote = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  return (
    <div className="app-body">
      <div className="note-app">
        <AddNewNote onSetNotes={setNotes} />
      </div>
      <div className="note-container">
        <NoteStatus notes={notes} />
        <NoteList
          notes={newNote}
          onDeleteNote={handleDeleteNote}
          onCheckNote={handleCheckNote}
        />
      </div>
    </div>
  );
}

export default AppBody;

function NoteStatus({ notes }) {
  if (!notes.length) {
    return (
      <Message>
        <h2>There are currently no notes in here ! </h2>
      </Message>
    );
  }
  const completed = notes.filter((n) => n.completed).length;
  return (
    <ul className="notes-status">
      <li>
        All<span>({notes.length})</span>
      </li>
      <li>
        Completed<span>({completed})</span>
      </li>
      <li>
        Open<span>({notes.length - completed})</span>
      </li>
    </ul>
  );
}
