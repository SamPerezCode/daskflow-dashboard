import "./task-card.css";

/**
 * @param {HTMLElement} element
 * @param {{ title: string, description: string, createdAt: string, priority: "alta" | "media" | "baja" }} task
 */
export const createTaskCard = (element, task) => {
  element.insertAdjacentHTML(
    "beforeend",
    `
      <article class="task-card">
        <p class="task-card__meta">${task.createdAt}</p>
        <h5 class="task-card__title">${task.title}</h5>
        <p class="task-card__description">${task.description}</p>
        <span class="task-card__priority task-card__priority--${task.priority}">
          ${task.priority}
        </span>
      </article>
    `
  );
};
