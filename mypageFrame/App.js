import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MypageFrame from "./component/MypageFrame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MypageFrame />} />
      </Routes>
    </div>
  );
}

export default App;
