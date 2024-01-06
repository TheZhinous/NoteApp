import { TrashIcon } from "@heroicons/react/24/outline";

function NoteList({ notes, onDeleteNote, onCheckNote }) {
  return (
    <div className="note-list">
      {notes.map((item, index) => (
        <NoteItem
          item={item}
          key={index + 1}
          onDeleteNote={onDeleteNote}
          onCheckNote={onCheckNote}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ item, onDeleteNote, onCheckNote }) {
  const { id, createdAt, Description, title, isCompleted } = item;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="note-item" key={id}>
      <div className="note-item__header">
        <div className="info">
          <p className={`title ${isCompleted ? "complete" : ""}`}>{title}</p>
          <p className="description">{Description}</p>
        </div>
        <div className="option">
          <button onClick={() => onDeleteNote(id)} className="remove-btn">
            <TrashIcon />
          </button>
          <input
            type="checkbox"
            checked={isCompleted}
            className="check-btn"
            onChange={onCheckNote}
            value={id}
          />
        </div>
      </div>
      <div className="note-item__body">
        {new Date(createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
