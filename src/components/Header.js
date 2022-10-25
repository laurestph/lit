import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class Header extends LitElement {

    static styles = css`
        .header {
            color: blue;
            display: flex;
            justify-content: space-between;
            width: 50%;
            background: #1111;
        }
  `;

    render() {
        return html`
            <div class="header">
                <p>Page d'Acceuil</p>
                <p>Autres</p>
            </div>    
        `;
    }

}
customElements.define('header-components', Header);
