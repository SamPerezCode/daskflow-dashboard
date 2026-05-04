import "../board/board.css";
import { createTaskCard } from "../task-card/task-card.js";

export const createBoard = (element) => {
  element.innerHTML = `
    <section class="column" id="todos">
      <h4>ToDo's</h4>
      <div class="cards-list" id="list-todo"></div>
    </section>

    <section class="column" id="pending">
      <h4>Pendientes</h4>
      <div class="cards-list" id="list-pending"></div>
    </section>

    <section class="column" id="progress">
      <h4>En progreso</h4>
      <div class="cards-list" id="list-progress"></div>
    </section>

    <section class="column" id="done">
      <h4>Completado</h4>
      <div class="cards-list" id="list-done"></div>
    </section>
  `;

  const todoList = element.querySelector("#list-todo");
  const pendingList = element.querySelector("#list-pending");
  const progressList = element.querySelector("#list-progress");
  const doneList = element.querySelector("#list-done");

  if (!todoList || !pendingList || !progressList || !doneList) {
    throw new Error("No se encontraron los contenedores de columnas");
  }

  createTaskCard(todoList, {
    title: "Diseñar layout dark mode",
    description: "Crear sidebar, topbar y columnas base",
    createdAt: "Hace 2 días",
    priority: "alta",
  });

  createTaskCard(pendingList, {
    title: "Render dinámico",
    description: "Mostrar tareas desde JavaScript",
    createdAt: "Hace 1 día",
    priority: "media",
  });

  createTaskCard(progressList, {
    title: "Topbar",
    description: "Ajustar alineación y espaciado",
    createdAt: "Hace 3 horas",
    priority: "baja",
  });

  createTaskCard(doneList, {
    title: "Estructura inicial",
    description: "Separación por módulos completada",
    createdAt: "Hoy",
    priority: "baja",
  });
};
