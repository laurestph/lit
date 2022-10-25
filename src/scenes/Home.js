import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import "../components/Header.js"

export class Home extends LitElement {

  render() {
    return html`
        <div>
            <header-components></header-components>
            <h1>Page d'Acceuil !</h1>
        </div>
    `;
  }

}
customElements.define('home-react', Home);
