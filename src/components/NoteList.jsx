
function NoteList() {
  return (
    <div className="note-list">
      <div className="note-item">
        <div className="note-item__header">
          <div className="info">
            <p className="title">title</p>
            <p className="description">Description</p>
          </div>
          <div className="option">
            <button className="remove-btn">remove</button>
            <input type="checkbox" className="check-btn" />
          </div>
        </div>
        <div className="note-item__body">2023/12/12 Sat Dec</div>
      </div>
    </div>
  );
}

export default NoteList