import React from 'react';
import {hydrateRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
// const container = document.getElementById('root');
// hydrateRoot(container, <App />);

