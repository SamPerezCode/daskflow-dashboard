import { createApp } from "./app/app.js";
import "./styles/globals.css";

const root = document.querySelector("#app");

if (!root) {
  throw new Error("No se encontró #app en index.html");
}

createApp(root);
