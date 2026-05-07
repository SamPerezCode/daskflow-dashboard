import "./board.css";
import { createkanbanColumn } from "../kanban-column/kanban-column.js";

/**
 * @param {HTMLElement} element
 * @param {Array<{ id: string, title: string, description: string, createdAt: string, priority: "alta" | "media" | "baja", status: "todo" | "pending" | "progress" | "done" }>} tasks
 * @param {(id: string, status: "todo" | "pending" | "progress" | "done") => Promise<void> | void} onStatusChange
 */
export const createBoard = (element, tasks = [], onStatusChange) => {
  element.innerHTML = "";

  const grouped = {
    todo: [],
    pending: [],
    progress: [],
    done: [],
  };

  for (const task of tasks) {
    const status = task?.status;
    if (grouped[status]) {
      grouped[status].push(task);
    }
  }

  const columns = [
    { idColumn: "todos", title: "ToDo's", tasks: grouped.todo },
    {
      idColumn: "pending",
      title: "Pendientes",
      tasks: grouped.pending,
    },
    {
      idColumn: "progress",
      title: "En progreso",
      tasks: grouped.progress,
    },
    { idColumn: "done", title: "Completado", tasks: grouped.done },
  ];

  columns.forEach((column) =>
    createkanbanColumn(element, column, onStatusChange)
  );
};
