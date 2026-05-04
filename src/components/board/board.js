export const createBoard = (element) => {
  element.innerHTML = `
    <section class="column" id="todos">

      <h4>ToDo's</h4>
      <div class="card-todo"></div>
    </section>
    <section class="column" id="pending">
      <h4>Pendientes</h4>
      <div class="card-pending"></div>
    </section>
    <section class="column" id="progress">
      <h4>En progreso</h4>
      <div class="card-progress"></div>
    </section>
    <section class="column" id="done">
      <h4>Completado</h4>
      <div class="card-done"></div>
    </section>
  `;
};
