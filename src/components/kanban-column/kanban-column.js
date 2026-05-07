import { createTaskCard } from "../task-card/task-card.js";
import "./kanban-column.css";

/**
 * @param {HTMLElement} element
 * @param {{ idColumn: string, title: string, tasks: Array<{ id: string, title: string, description: string, createdAt: string, priority: "alta" | "media" | "baja", status: "todo" | "pending" | "progress" | "done" }> }} data
 * @param {(id: string, status: "todo" | "pending" | "progress" | "done") => Promise<void> | void} onStatusChange
 */
export const createkanbanColumn = (element, data, onStatusChange) => {
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
  if (!list) throw new Error("No se encontró .cards-list");

  if (data.tasks.length === 0) {
    list.innerHTML = `<p class="column-empty">Sin tareas</p>`;
  } else {
    data.tasks.forEach((task) =>
      createTaskCard(list, task, onStatusChange)
    );
  }

  element.append(section);
};
