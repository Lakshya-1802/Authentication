import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./Page/authPage";
import Register from "./Page/Register";
import Login from "./Page/Login";
import Home from "./Page/home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/authPage" element={<AuthPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
