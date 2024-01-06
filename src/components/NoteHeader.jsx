const sortedValues = [
  {
    id: 1,
    text: "sorted based on latest note",
    value: "latest",
  },
  {
    id: 2,
    text: "sorted based on earliest note",
    value: "earliest",
  },
  {
    id: 3,
    text: "sorted based on completed note",
    value: "completed",
  },
];
function NoteHeader({ notes, onChangeSort }) {
  return (
    <div className="note-header">
      <h2>NoteApp({notes.length})</h2>
      <select className="note-sort" onChange={onChangeSort}>
        {sortedValues.map((i) => (
          <option key={i.id} className="note-sort_item" value={i.value}>
            {i.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default NoteHeader;
