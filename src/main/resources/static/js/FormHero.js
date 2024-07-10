class HeroForm extends HTMLElement {
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
                        form {
                            background: #fff;
                            padding: 20px;
                            border-radius: 5px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            max-width: 100%;
                        }
                        label {
                            display: block;
                            margin-bottom: 10px;
                            font-weight: bold;
                        }
                        input, textarea {
                            width: 100%;
                            padding: 10px;
                            margin-bottom: 20px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                        }
                        button {
                            padding: 10px 20px;
                            border: none;
                            background: #007bff;
                            color: white;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                        button:hover {
                            background: #0056b3;
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
                    </style>
                    <div class="modal" id="myModal">
                      <div class="modal-content">
                      <span class="close">&times;</span>
                        <form id="heroForm">
                          <label for="name">Name:</label>
                          <input type="text" id="name" name="name" required>

                          <label for="imageUrl">Image URL:</label>
                          <input type="url" id="imageUrl" name="imageUrl" required>

                          <label for="description">Description:</label>
                          <textarea id="description" name="description" required></textarea>

                          <label for="yearOfCreation">Year of Creation:</label>
                          <input type="number" id="yearOfCreation" name="yearOfCreation" required>

                          <label for="category">Category:</label>
                          <input type="text" id="category" name="category" required>

                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    </div>
                `;

    this.shadowRoot.querySelector('#heroForm').addEventListener('submit', this.handleSubmit.bind(this));

    this.shadowRoot.querySelector('.close').addEventListener('click', () => {
      this.closeModal();
    });

  }

  openModal() {
    this.shadowRoot.querySelector('.modal').style.display = 'block';
  }

  closeModal() {
    this.shadowRoot.querySelector('.modal').style.display = 'none';
  }

  handleSubmit(event) {
    event.preventDefault();

    const hero = {
      name: this.shadowRoot.querySelector('#name').value,
      imageUrl: this.shadowRoot.querySelector('#imageUrl').value,
      description: this.shadowRoot.querySelector('#description').value,
      yearOfCreation: parseInt(this.shadowRoot.querySelector('#yearOfCreation').value),
      category: this.shadowRoot.querySelector('#category').value
    };

    console.log('Hero Data:', hero);

    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hero),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

customElements.define('hero-form', HeroForm);

export default HeroForm;
