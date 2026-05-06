import "./topbar.css";

/**
 * @param {HTMLElement} element
 * @param {(payload: { title: string, status: "todo" | "pending" | "progress" | "done" }) => Promise<void> | void} onCreateTask
 */
export const createTopbar = (element, onCreateTask) => {
  if (!element) {
    throw new Error("No se encontró el contenedor del topbar");
  }

  element.innerHTML = `
    <div class="topbar-left">
      <h3 class="topbar-title">Everything</h3>

      <form id="form-task">
        <span>Nueva Tarea</span>

        <label for="titleTask">Título</label>
        <input id="titleTask" type="text" name="titleTask" placeholder="Nombre de tarea" />

        <label for="statusTask">Estado</label>
        <select id="statusTask" name="status">
          <option value="todo">ToDo</option>
          <option value="pending">Pendiente</option>
          <option value="progress">En progreso</option>
          <option value="done">Completado</option>
        </select>

        <button type="submit">Agregar</button>
      </form>
    </div>

    <div class="topbar-right">
      <button class="topbar-filter" type="button">All</button>

      <div class="topbar-avatars" id="avatars">
        <span class="avatar">A</span>
        <span class="avatar">B</span>
        <span class="avatar">C</span>
        <span class="avatar">D</span>
      </div>
    </div>
  `;

  const form = element.querySelector("#form-task");
  if (!form) throw new Error("No se encontró #form-task");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const title = String(formData.get("titleTask") ?? "").trim();
    const status = String(formData.get("status") ?? "todo");

    if (!title) return;

    await onCreateTask?.({ title, status });
    form.reset();

    console.log(title, status);
  });
};
