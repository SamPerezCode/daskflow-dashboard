import "./topbar.css";

export const createTopbar = (element) => {
  if (!element) {
    throw new Error("No se encontró el contenedor del topbar");
  }

  element.innerHTML = `
    <div class="topbar-left">
      <h3 class="topbar-title">Everything</h3>
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
};
