import "./task-card.css";

/**
 * @param {HTMLElement} element
 * @param {{ id: string, title: string, description: string, createdAt: string, priority: "alta" | "media" | "baja", status: "todo" | "pending" | "progress" | "done" }} task
 * @param {(id: string, status: "todo" | "pending" | "progress" | "done") => Promise<void> | void} onStatusChange
 */
export const createTaskCard = (element, task, onStatusChange) => {
  element.insertAdjacentHTML(
    "beforeend",
    `
      <article class="task-card">
        <p class="task-card__meta">${task.createdAt}</p>
        <h5 class="task-card__title">${task.title}</h5>
        <p class="task-card__description">${task.description ?? ""}</p>
        <span class="task-card__priority task-card__priority--${task.priority}">
          ${task.priority}
        </span>

        <select class="task-status-select" name="status">
          <option value="todo">ToDo</option>
          <option value="pending">Pendiente</option>
          <option value="progress">En progreso</option>
          <option value="done">Completado</option>
        </select>
      </article>
    `
  );

  const card = element.lastElementChild;
  const statusSelect = card?.querySelector(".task-status-select");
  if (!statusSelect) return;

  statusSelect.value = task.status ?? "todo";

  statusSelect.addEventListener("change", async (event) => {
    const nextStatus = event.target.value;
    await onStatusChange?.(task.id, nextStatus);
  });
};

/**
 *
 * @param {HTMLElement} element
 * @param {{title: string, description: string, createdAt: string, priority: "alta"| "media" | "baja" }} task
 */
// export const cardPractic = (element, task) => {
//   element.innerHTML = `
//     <article class="card-task">
//       <p class="createdAt">${task.createdAt}</p>
//       <h5 class="title">${task.title}</h5>
//       <p class="description">
//         Lorem ipsum dolor sit amet consectetur adipisicing
//         elit.perspiciatis sapiente est dolorem modi accusamus
//         consequatur eius officia!
//         ${task.description}
//       </p>
//       <span class="task-priority task-priority-${task.priority} ">${task.priority}</span>
//     </article>
//   `;
// };
