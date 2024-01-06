import AppBody from "./components/AppBody";
import NoteHeader from "./components/NoteHeader";
import { useState } from "react";
import "./App.css";
import "./index.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const handleNoteSorting = (e) => {
    setSortBy(e.target.value);
  }

  return (
    <div className="container">
      <NoteHeader notes={notes} onChangeSort={handleNoteSorting}  />
      <AppBody notes={notes} setNotes={setNotes} onSortBy={sortBy} />
    </div>
  );
}

export default App;
