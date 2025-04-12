import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}

export default App;
