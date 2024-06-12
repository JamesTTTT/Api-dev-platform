import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RequestProvider } from "./contexts/RequestContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RequestProvider>
      <App />
    </RequestProvider>
  </React.StrictMode>
);
