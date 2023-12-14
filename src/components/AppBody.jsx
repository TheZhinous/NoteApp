import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";


function AppBody() {
  return (
    <div className="app-body">
      <div className="note-app">
        <AddNewNote/>
      </div>
      <div className="note-container">
        <NoteStatus/>
        <NoteList/>
      </div>
    </div>
  );
}

export default AppBody;


function NoteStatus() {
  return (
    <ul className="notes-status">
      <li>
        All<span>(2)</span>
      </li>
      <li>
        Completed<span>(1)</span>
      </li>
      <li>
        Open<span>(0)</span>
      </li>
    </ul>
  );
}
