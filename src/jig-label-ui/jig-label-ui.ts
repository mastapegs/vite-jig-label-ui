import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface JigData {
  jig_name: string;
  author: string;
  author_badge: string;
  date: string;
  language: string;
  curators: string[];
}

@customElement("jib-label-ui")
export class JigLabelUI extends LitElement {
  static styles = css`
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
    .jig {
      display: flex;
      justify-content: space-between;
    }
    .flex {
      flex: 1 1 0;
      border: solid 1px #eaebef;
      padding: 5px;
    }
  `;

  @property({ attribute: false })
  headers: string[] = [
    "Jig Name",
    "Author",
    "Author's Badge",
    "Date",
    "Instruction Language",
    "Curators",
  ];

  @property({ attribute: false })
  jigs: JigData[] = [];

  render() {
    return html`
      <div class="container">
        <div class="headers">
          ${this.headers.map(
            (header) => html`<div class="flex">${header}</div>`
          )}
        </div>
        ${this.jigs.map((jig) => {
          return html`<div class="jig">
            <div class="flex">${jig.jig_name}</div>
            <div class="flex">${jig.author}</div>
            <div class="flex">${jig.author_badge}</div>
            <div class="flex">${jig.date}</div>
            <div class="flex">${jig.language}</div>
            <div class="flex">${jig.curators.join(", ")}</div>
          </div>`;
        })}
      </div>
    `;
  }
}
