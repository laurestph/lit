import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class Home extends LitElement {

  render() {
    return html`<h1>Page d'Acceuil !</h1>`;
  }

}
customElements.define('home-react', Home);
