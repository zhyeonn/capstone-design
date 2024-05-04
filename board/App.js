import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Board from "./component/Board";
import BoardContents from "./component/BoardContents";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/BoardContents" element={<BoardContents />} />
      </Routes>
    </div>
  );
}

export default App;
