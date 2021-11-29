import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { JigData } from "./types";
import { JigLabelUI } from "./jig-label-ui";
import { jigs } from "./data";

import './jig-label-ui'

export default {
  title: "Jig Label UI",
  component: 'jig-label-ui',
} as Meta;

const Template: Story<JigLabelUI> = ({ jigs }: { jigs: JigData[] }) =>
  html`<jib-label-ui .jigs="${jigs}"></jib-label-ui>`;

export const Primary = Template.bind({});
Primary.args = {
  jigs,
};
