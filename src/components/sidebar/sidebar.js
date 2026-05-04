export const createSidebar = (element) => {
  element.innerHTML = `

    <div class='sidebar-logo'>Logo</div>

    <nav class= 'sidebar-nav'>

      <ul>
        <li class="active">
          <button data-filter='all'>
            Todas
          </button>
        </li>

        <li>
          <button data-filter='todo'>
            Pendientes
          </button>
        </li>

         <li>
          <button data-filter='progress'>
            En progreso
          </button>
        </li>

         <li>
          <button data-filter='done'>
            Completadas
          </button>
        </li>
      </ul>
    </nav>

    <div class="sidebar-divider"></div>

    <div class="sidebar-filters">
      <h4>Prioridad</h4>

      <button data-priority="alta">🔴 Alta</button>
      <button data-priority="media">🟡 Media</button>
      <button data-priority="baja">🟢 Baja</button>
    </div>

    <div class="sidebar-footer">
      <button class="btn-logout">Cerrar sesión</button>
    </div>

  `;
};
