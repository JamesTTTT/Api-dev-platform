import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ApiTestWrapper } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ApiTestWrapper />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
