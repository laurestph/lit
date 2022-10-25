import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import "./src/scenes/Home.js"

export class Router extends LitElement {

  render() {
    return html`
      <div>
        <home-react>
      </div>
      `;
  }


}
customElements.define('router-lit', Router);
