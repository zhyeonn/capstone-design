import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChangePassword from "./component/ChangePassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;
