import { taskFetch } from "./api-client";

const url = `${import.meta.env.VITE_BASE_URL}`;
/**
 *
 * @returns {Promise<{ title: string, description: string, createdAt: string, priority: "alta" | "media" | "baja" }[]>}
 */
export const getTasks = async () => {
  const tasks = await taskFetch();
  return tasks;
};

/**
 *
 * @param {Object} task
 * @returns
 */
export const createTask = async (task) => {
  const normalizedTask = {
    title: (task?.title ?? "").trim(),
    description: (task?.description ?? "").trim(),
    status: task?.status ?? "todo",
    priority: task?.priority ?? "media",
    createdAt: new Date().toISOString().slice(0, 10),
  };

  if (!normalizedTask.title) {
    throw new Error("El titulo es obligatorio");
  }

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(normalizedTask),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error en la respuesta");

  const newTask = await res.json();
  return newTask;
};

export const updateTaskStatus = async (id, status) => {
  const res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Error en la actualización");

  return await res.json();
};

/*
?new Date()
crea la fecha/hora actual.

?.toISOString()
la convierte a texto estándar UTC, por ejemplo:
2026-05-05T14:32:10.123Z

?.slice(0, 10)
corta solo los primeros 10 caracteres:
2026-05-05
*/
