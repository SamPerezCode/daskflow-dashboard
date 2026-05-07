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
        <div>
          <span>Nueva Tarea</span>
        </div>

        <div class="container-inputs">
          <div class="div-forms">
            <label for="titleTask">Título de la Tarea</label>
            <input id="titleTask" type="text" name="titleTask" placeholder="Nombre de tarea" />
          </div>

          <div class="div-forms">
            <label for="description">Descripción</label>
            <input id="description" name="description" type="text" placeholder="Descripción de la tarea"/>
          </div>

          <div class="div-forms">
            <label for="statusTask">Estado</label>
            <select id="statusTask" name="status">
              <option value="todo">ToDo</option>
              <option value="pending">Pendiente</option>
              <option value="progress">En progreso</option>
              <option value="done">Completado</option>
            </select>
          </div>

          <div class="div-forms">
            <button type="submit">Agregar</button>
          </div>

         </div>
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

    // Con FormData: La forma moderna más escalable
    const formData = new FormData(form);
    const title = String(formData.get("titleTask") ?? "").trim();
    const description = String(
      formData.get("description") ?? ""
    ).trim();
    const status = String(formData.get("status") ?? "todo");

    if (!title || !description) return;

    await onCreateTask?.({ title, description, status });
    form.reset();

    console.log({ title, description, status });

    // Forma manual: Recomanda para form pequeños
    // const titleInput = form.querySelector("[name='titleTask']");
    // const inputDescription = form.querySelector(
    //   "[name='description']"
    // );
    // const statusSelect = form.querySelector("[name='status']");

    // if (!titleInput || !inputDescription || !statusSelect) return;

    // const title = titleInput.value.trim();
    // const description = inputDescription.value;
    // const status = statusSelect.value;

    // if (!title) return;

    // await onCreateTask({ title, description, status });

    // form.reset();
    // console.log({title, description, status});
  });
};
