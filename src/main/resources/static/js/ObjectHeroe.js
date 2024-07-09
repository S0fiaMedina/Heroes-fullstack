class ObjectHeroe extends HTMLElement {
  constructor() {
    super();
    this.mostrarInfo = this.mostrarInfo.bind(this);

    const wrapper = document.createElement('div');

    wrapper.innerHTML = `
      <div class="imagen">
        <img src="${this.getAttribute('foto')}" alt="heroe" />
      </div>
      <div class="info">
        <h3>${this.getAttribute('nombre')}</h3>
        <button class="botonVer">Ver</button>
      </div>
    `;

    this.appendChild(wrapper);

    this.querySelector('.botonVer').addEventListener('click', this.mostrarInfo);
  }

  mostrarInfo() {
    document.getElementById('modalTitle').textContent = this.getAttribute('nombre');
    document.getElementById('modalDescription').textContent = this.getAttribute('descripcion');
    document.getElementById('modalFecha').textContent = this.getAttribute('fecha');
    document.getElementById('myModal').style.display = 'flex';
    document.querySelector('.imgModal').src = this.getAttribute('foto');
    document.querySelector('.close').classList.add(this.getAttribute('universo'));
  }
}

customElements.define('object-heroe', ObjectHeroe);

export default ObjectHeroe;
