import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Winmenu from "./Menu/Winmenu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Winmenu />
    <App />
  </React.StrictMode>,
);
