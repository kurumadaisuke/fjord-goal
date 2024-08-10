import React from "react";
import { createRoot } from "react-dom/client";

import Hey from "./components/Hey";

function App() {
  return (
    <h1 className="text-4xl font-bold text-blue-500">
      <Hey name="Tanaka Tarou" />
    </h1>
  );
}

const root = document.getElementById("root");
if (!root) {
  throw new Error("No root element");
}
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
