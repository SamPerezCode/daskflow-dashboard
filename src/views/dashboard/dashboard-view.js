import { createBoard } from "../../components/board/board";
import { createSidebar } from "../../components/sidebar/sidebar";
import { createTopbar } from "../../components/topbar/topbar";

export const createDashboard = (element) => {
  element.innerHTML = `
    <aside class="sidebar" id="sidebar">Sidebar</aside>
    <main class="container-main">
      <header>
        <h1>ToDo</h1>
      </header>

      <div class="topbar">

      </div>
      <div class='container-board'>

      </div>
    </main>
  `;

  const sidebarAside = document.querySelector("#sidebar");
  if (!sidebarAside) {
    throw new Error(
      "No se encontró el contendor sidebar en dashboard"
    );
  }

  const topbar = document.querySelector(".topbar");
  if (!topbar) {
    throw new Error("No existe el topbar");
  }

  const board = document.querySelector(".container-board");
  if (!board) {
    throw new Error("No existe board");
  }
  createBoard(board);
  createTopbar(topbar);
  createSidebar(sidebarAside);
};
