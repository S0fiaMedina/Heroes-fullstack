class ObjectHeroe extends HTMLElement {
  constructor() {
    super();
    this.mostrarInfo = this.mostrarInfo.bind(this);

    this.attachShadow({ mode: 'open' });


    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="card">
        <img class="hero-img" src="${this.getAttribute('foto')}" alt="${this.getAttribute('nombre')}">
        <h2>${this.getAttribute('nombre')}</h2>
        <button class="botonVer">Ver más</button>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .card {
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        text-align: center;
      }
      .hero-img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
      }
      .botonVer {
        margin-top: 8px;
        padding: 8px 16px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      .botonVer:hover {
        background-color: #0056b3;
      }
    `;

    this.shadowRoot.append(style, wrapper);

    this.shadowRoot.querySelector('.botonVer').addEventListener('click', this.mostrarInfo);
  }

  mostrarInfo() {
    document.getElementById('modalTitle').textContent = this.getAttribute('nombre');
    document.getElementById('modalDescription').textContent = this.getAttribute('descripcion');
    document.getElementById('modalFecha').textContent = this.getAttribute('fecha');
    document.getElementById('myModal').style.display = 'flex';
    document.querySelector('.imgModal').src = this.getAttribute('foto');
    document.querySelector('.close').classList.add(`${this.getAttribute('universo')}`);
  }
}

customElements.define('object-heroe', ObjectHeroe);

export default ObjectHeroe;