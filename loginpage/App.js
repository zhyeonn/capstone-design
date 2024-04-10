import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import SearchPassword from "./component/SearchPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SearchPassword" element={<SearchPassword />} />
      </Routes>
    </div>
  );
}

export default App;
