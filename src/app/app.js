import { createDashboard } from "../views/dashboard/dashboard-view.js";

/**
 * Orquesta el montaje de la app.
 * @param {HTMLElement} element
 */
export const createApp = (element) => {
  createDashboard(element);
};
