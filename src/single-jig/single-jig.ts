import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("single-jig")
export class SingleJig extends LitElement {
  static styles = css`
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

  render() {
    return html`<div class="jig">
      <div class="flex"><slot name="jig-name"></slot></div>
      <div class="flex"><slot name="author"></slot></div>
      <div class="flex"><slot name="author-badge"></slot></div>
      <div class="flex"><slot name="date"></slot></div>
      <div class="flex"><slot name="language"></slot></div>
      <div class="flex"><slot name="curators"></slot></div>
    </div>`;
  }
}
