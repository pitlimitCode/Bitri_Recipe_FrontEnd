import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}



export default App;
