import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="container">
      <div className="note-header">
        <h2>NoteApp(3)</h2>
        <select className="note-sort">
          <option className="note-sort__item">sorted by latest</option>
          <option className="note-sort__item">sorted by earliest</option>
          <option className="note-sort__item">sorted by completed</option>
        </select>
      </div>
      <div className="app-body">
        <div className="note-app">
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
        </div>
        <div className="note-container">
          <ul className="notes-status">
            <li>All</li>
            <li>Completed</li>
            <li>Open</li>
          </ul>
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
        </div>
      </div>
    </div>
  );
}

export default App;
