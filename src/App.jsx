import "./App.css";
import AppBody from "./components/AppBody";
import NoteHeader from "./components/NoteHeader";
import "./index.css";
function App() {
  return (
    <div className="container">
      <NoteHeader/>
      <AppBody/>
    </div>
  );
}

export default App;
