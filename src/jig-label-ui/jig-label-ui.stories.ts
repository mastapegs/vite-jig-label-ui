import { html } from "lit";
import { JigData } from "./types";
import "./jig-label-ui";

export default {
  title: "Jig Label UI",
};

const jigs = [
  {
    jig_name: "Hebrew Letters",
    author: "Michael Wikes",
    author_badge: "JI Team",
    date: "Aug. 5, 2020",
    language: "English (American)",
    curators: ["Anat (13.7.21)"],
  },
  {
    jig_name: "Hebrew Numbers & Balloons",
    author: "Michael Wikes",
    author_badge: "JI Team",
    date: "Aug. 5, 2020",
    language: "English (American)",
    curators: ["Anat (13.7.21)"],
  },
  {
    jig_name: "Hebrew Letters",
    author: "Michael Wikes",
    author_badge: "JI Team",
    date: "Aug. 5, 2020",
    language: "English (American)",
    curators: ["Anat (13.7.21)"],
  },
  {
    jig_name: "Hebrew Letters",
    author: "Michael Wikes",
    author_badge: "JI Team",
    date: "Aug. 5, 2020",
    language: "English (American)",
    curators: ["Anat (13.7.21)"],
  },
  {
    jig_name: "Hebrew Letters",
    author: "Michael Wikes",
    author_badge: "JI Team",
    date: "Aug. 5, 2020",
    language: "English (American)",
    curators: ["Anat (13.7.21)"],
  },
  {
    jig_name: "Hebrew Letters",
    author: "Michael Wikes",
    author_badge: "JI Team",
    date: "Aug. 5, 2020",
    language: "English (American)",
    curators: ["Anat (13.7.21)"],
  },
] as JigData[];

export const Primary = () =>
  html`<jib-label-ui .jigs="${jigs}"></jib-label-ui>`;
