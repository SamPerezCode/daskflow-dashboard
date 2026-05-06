import "./board.css";
import { createkanbanColumn } from "../kanban-column/kanban-column.js";

export const createBoard = (element, tasks = []) => {
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

  columns.forEach((column) => createkanbanColumn(element, column));
};
