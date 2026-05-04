import { createSidebar } from "../../components/sidebar/sidebar";

export const createDashboard = (element) => {
  element.innerHTML = `
    <aside class="sidebar" id="sidebar">Sidebar</aside>
    <main class="board">
      <header>
        <h1>ToDo</h1>
      </header>

      <section class="column" id="todos">ToDo's</section>
      <section class="column" id="pending">Pendientes</section>
      <section class="column" id="progress">En progreso</section>
      <section class="column" id="done">Completado</section>
    </main>
  `;

  const sidebarAside = document.querySelector("#sidebar");
  if (!sidebarAside) {
    throw new Error(
      "No se encontró el contendor sidebar en dashboard"
    );
  }

  createSidebar(sidebarAside);
};
