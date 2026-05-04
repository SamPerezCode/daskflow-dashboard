/**
 *
 * @param {HTMLDivElement} elemet
 */
export const createTopbar = (elemet) => {
  elemet.innerHTML = `
      <h3>Everything</h3>
      <div class="container-avatars" id="avatars">
        <div>Avatar 1</div>
        <div>Avatar 2</div>
      </div>
  `;
};
