import { taskFetch } from "./api-client";

/**
 *
 * @returns {Promise<{ title: string, description: string, createdAt: string, priority: "alta" | "media" | "baja" }[]>}
 */
export const getTasks = async () => {
  const tasks = await taskFetch();
  return tasks;
};

export const createTask = async (task) => {
  const url = `${import.meta.env.VITE_BASE_URL}`;
  const normalicedTask = {
    title: (task?.title ?? "").trim(),
    description: (task?.description ?? "").trim(),
    status: task?.status ?? "todo",
    priority: task?.priority ?? "media",
    createdAt: new Date.toISOString().slice(0, 10),
  };

  if (!normalicedTask.title) {
    throw new Error("El titulo es obligatorio");
  }

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(normalicedTask),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error en la respuesta");

  const newTask = await res.json();
  return newTask;
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
