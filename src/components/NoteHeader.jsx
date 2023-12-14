const sortedValues = [
  {
    id: 1,
    value: "sorted based on latest note",
  },
  {
    id: 2,
    value: "sorted based on earliest note",
  },
  {
    id: 3,
    value: "sorted based on completed note",
  },
];
function NoteHeader() {
  return (
    <div className="note-header">
      <h2>NoteApp(3)</h2>
      <select className="note-sort">
        {sortedValues.map((i) => (
          <option key={i.id} className="note-sort_item">{i.value}</option>
        ))}
      </select>
    </div>
  );
}

export default NoteHeader;
