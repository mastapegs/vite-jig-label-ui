import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import jigFlex from "../common-css/jig-flex-css";

@customElement("jig-label-ui")
export class JigLabelUI extends LitElement {
  static styles = [
    jigFlex,
    css`
      .container {
        font-family: sans-serif;
        background: #f3f8fe;

        border: solid 1px #c4d9f7;
      }
      .headers {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        color: #2565d5;
      }
    `,
  ];

  @property({ attribute: false })
  headers: string[] = [
    "Jig Name",
    "Author",
    "Author's Badge",
    "Date",
    "Instruction Language",
    "Curators",
  ];

  render() {
    return html`
      <div class="container">
        <div class="headers">
          ${this.headers.map(
            (header) => html`<div class="flex">${header}</div>`
          )}
        </div>
        <slot></slot>
      </div>
    `;
  }
}

// ${this.jigs.map((jig) => {
//   return html`
//     <single-jig>
//       <span slot="jig-name">${jig.jig_name}</span>
//       <span slot="author">${jig.author}</span>
//       <span slot="author-badge">${jig.author_badge}</span>
//       <span slot="date">${jig.date}</span>
//       <span slot="language">${jig.language}</span>
//       <span slot="curators">${jig.curators}</span>
//     </single-jig>
//   `;
// })}