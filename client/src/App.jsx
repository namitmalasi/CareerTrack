import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Stats from "./pages/Stats";
import EditJob from "./pages/EditJob";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/edit/:id" element={<EditJob />} />
      </Routes>
    </Layout>
  );
}

export default App;
