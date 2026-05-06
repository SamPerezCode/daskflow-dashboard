import { createTaskCard } from "../task-card/task-card.js";
import "./kanban-column.css";

/**
 * @param {HTMLElement} element
 * @param {{ idColumn: string, title: string, tasks: Array<{ title: string, description: string, createdAt: string, priority: "alta" | "media" | "baja" }> }} data
 */
export const createkanbanColumn = (element, data) => {
  const section = document.createElement("section");
  section.className = "column";
  section.id = data.idColumn;

  section.innerHTML = `
    <header class="column-header">
      <h4>${data.title}</h4>
      <span class="column-count">Cantidad: ${data.tasks.length}</span>
    </header>
    <div class="cards-list"></div>
  `;
  const list = section.querySelector(".cards-list");
  if (!list) throw new Error("No se encontró .card-list");

  data.tasks.forEach((task) => createTaskCard(list, task));
  if (data.tasks.length === 0) {
    list.innerHTML = `
      <p class="column-empty">Sin tareas</p>`;
  }

  element.append(section);
};
