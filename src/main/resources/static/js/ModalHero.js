class HeroModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
            <style>
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgb(0,0,0);
                    background-color: rgba(0,0,0,0.4);
                    overflow: hidden;
                }
                .modal-content {
                    background-color: #fefefe;
                    margin: 5% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                    max-width: 600px;
                    border-radius: 10px;
                    position: relative;
                }
                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                }
                .close:hover,
                .close:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }
                .imgModal {
                    max-width: 100%;
                    border-radius: 10px;
                    margin-top: 20px;
                }
            </style>
            <div class="modal" id="myModal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2 id="modalTitle"></h2>
                    <p id="modalDescription"></p>
                    <p id="modalFecha"></p>
                    <img class="imgModal" src="" alt="Hero Image">
                </div>
            </div>
        `;

    this.shadowRoot.querySelector('.close').addEventListener('click', () => {
      this.closeModal();
    });
  }

  connectedCallback() {
    if (this.hasAttribute('title')) {
      this.shadowRoot.getElementById('modalTitle').textContent = this.getAttribute('title');
    }
    if (this.hasAttribute('description')) {
      this.shadowRoot.getElementById('modalDescription').textContent = this.getAttribute('description');
    }
    if (this.hasAttribute('date')) {
      this.shadowRoot.getElementById('modalFecha').textContent = this.getAttribute('date');
    }
    if (this.hasAttribute('imgsrc')) {
      this.shadowRoot.querySelector('.imgModal').src = this.getAttribute('imgsrc');
    }
  }

  openModal() {
    this.shadowRoot.querySelector('.modal').style.display = 'block';
  }

  closeModal() {
    this.shadowRoot.querySelector('.modal').style.display = 'none';
  }
}

customElements.define('hero-modal', HeroModal);

export default HeroModal;
