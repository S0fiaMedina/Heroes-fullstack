import HeroForm from "./FormHero.js"; // Asegúrate de importar el Web Component
import HeroModal from "./ModalHero.js"; // Asegúrate de importar el Web Component

const dummyHeroForm = new HeroForm();
const dummyHeroModal = new HeroModal();
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
        <button class="botonEditar">Editar</button>
      </div>
    `;

    this.appendChild(wrapper);

    this.querySelector('.botonVer').addEventListener('click', this.mostrarInfo);
    this.querySelector('.botonEditar').addEventListener('click', this.editarHero);
  }

  mostrarInfo() {
    let divRelleno = document.querySelector("#myModal")
    divRelleno.innerHTML = `<hero-modal></hero-modal>`;
    document.querySelector('hero-modal').shadowRoot.getElementById('modalTitle').textContent = this.getAttribute('nombre');
    document.querySelector('hero-modal').shadowRoot.getElementById('modalDescription').textContent = this.getAttribute('descripcion');
    document.querySelector('hero-modal').shadowRoot.getElementById('modalFecha').textContent = this.getAttribute('fecha');
    document.querySelector('hero-modal').shadowRoot.querySelector('.imgModal').src = this.getAttribute('foto');
    document.querySelector('hero-modal').shadowRoot.querySelector('.close').classList.add(this.getAttribute('universo'));
    document.querySelector('hero-modal').shadowRoot.querySelector('.modal').style.display = 'block';

    // document.shadowroot.getElementById('modalTitle').textContent = this.getAttribute('nombre');
    // document.getElementById('modalDescription').textContent = this.getAttribute('descripcion');
    // document.getElementById('modalFecha').textContent = this.getAttribute('fecha');
    // document.getElementById('myModal').style.display = 'flex';
    // document.querySelector('.imgModal').src = this.getAttribute('foto');
    // document.querySelector('.close').classList.add(this.getAttribute('universo'));
  }

  editarHero() {
    let divRelleno = document.querySelector("#myModal")
    console.log(divRelleno);
    divRelleno.innerHTML = `<hero-form></hero-form>`;
    document.querySelector('hero-form').shadowRoot.querySelector('.modal').style.display = 'block';
  }
}

customElements.define('object-heroe', ObjectHeroe);

export default ObjectHeroe;
