import "./jig-label-ui";
import "./single-jig";
//@ts-ignore
import init from "jig_ui";

init().then(() => {
  console.log("init wasm-pack");
});
