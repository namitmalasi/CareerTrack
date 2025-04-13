import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Stats from "./pages/Stats";
import EditJob from "./pages/EditJob";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/edit/:id" element={<EditJob />} />
      </Routes>
    </Layout>
  );
}

export default App;
