import { createBoard } from "../../components/board/board";
import { createSidebar } from "../../components/sidebar/sidebar";
import { createTopbar } from "../../components/topbar/topbar";
import "../dashboard/dashboard-view.css";

export const createDashboard = (element) => {
  element.innerHTML = `
    <aside class="sidebar" id="sidebar">Sidebar</aside>
    <main class="container-main">
      <header>
      <div class="topbar">
      </div>
      </header>


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
  createSidebar(sidebarAside);
  createBoard(board);
  createTopbar(topbar);
};
