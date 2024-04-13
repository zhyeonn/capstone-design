import logo from "./logo.svg";
import "./App.css";
import Notice from "./component/Notice";
import NoticeContents from "./component/NoticeContents";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Notice />} />
        <Route path="/NoticeContents" element={<NoticeContents />} />
      </Routes>
    </div>
  );
}

export default App;
