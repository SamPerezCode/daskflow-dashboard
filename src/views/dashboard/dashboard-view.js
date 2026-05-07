import { createBoard } from "../../components/board/board.js";
import { createSidebar } from "../../components/sidebar/sidebar.js";
import { createTopbar } from "../../components/topbar/topbar.js";
import {
  createTask,
  getTasks,
  updateTaskStatus,
} from "../../services/tasks.service.js";
import "../dashboard/dashboard-view.css";

export const createDashboard = async (element) => {
  element.innerHTML = `
    <aside class="sidebar" id="sidebar">Sidebar</aside>
    <main class="container-main">
      <header>
        <div class="topbar"></div>
      </header>
      <div class="container-board"></div>
    </main>
  `;

  const sidebarAside = element.querySelector("#sidebar");
  const topbar = element.querySelector(".topbar");
  const board = element.querySelector(".container-board");

  if (!sidebarAside) throw new Error("No se encontró #sidebar");
  if (!topbar) throw new Error("No se encontró .topbar");
  if (!board) throw new Error("No se encontró .container-board");

  createSidebar(sidebarAside);

  const renderBoard = async () => {
    const tasks = await getTasks();

    createBoard(board, tasks, async (id, nextStatus) => {
      await updateTaskStatus(id, nextStatus);
      await renderBoard();
    });
  };

  await renderBoard();

  createTopbar(topbar, async (payload) => {
    await createTask(payload);
    await renderBoard();
  });
};
