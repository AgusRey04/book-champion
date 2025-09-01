import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/auth/login/Login";
import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import NotFound from "./components/notFound/NotFound";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className=" d-flex flex-column align-items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute isLoggedIn={loggedIn} />}>
            <Route
              path="/library/*"
              element={<Dashboard onLogout={handleLogout} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
