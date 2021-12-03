import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { JigData } from "./types";
import { jigs } from "./data";

import "./jig-label-ui";
import "../single-jig";

export default {
  title: "Jig Label UI",
  component: "jig-label-ui",
} as Meta;

const Template: Story = ({ jigs }) =>
  html`
    <jig-label-ui>
      ${jigs.map(
        (jig: JigData) => html`
          <single-jig>
            <span slot="jig-name">${jig.jig_name}</span>
            <span slot="author">${jig.author}</span>
            <span slot="author-badge">${jig.author_badge}</span>
            <span slot="date">${jig.date}</span>
            <span slot="language">${jig.language}</span>
            <span slot="curators">${jig.curators}</span>
          </single-jig>
        `
      )}
    </jig-label-ui>
  `;

export const Primary = Template.bind({});
Primary.args = {
  jigs,
};
