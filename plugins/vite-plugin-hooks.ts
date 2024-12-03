import type { Plugin } from "vite";

const name = "vite-plugin-hooks";

const vitePluginHooks: Plugin = {
  name,
  options() {
    console.log("'options' hook invoked!");
  },
  buildStart() {
    console.log("'buildStart' hook invoked!");
  },
  resolveId() {
    console.log("'resolveId' hook invoked!");
  },
  load() {
    console.log("'load' hook invoked!");
  },
  transform() {
    console.log("'transform' hook invoked!");
  },
  buildEnd() {
    console.log("'buildEnd' hook invoked!");
  },
  closeBundle() {
    console.log("'closeBundle' hook invoked!");
  },
  config() {
    console.log("'config' hook invoked!");
  },
  configResolved() {
    console.log("'configResolved' hook invoked!");
  },
  configureServer() {
    console.log("'configureServer' hook invoked!");
  },
  configurePreviewServer() {
    console.log("'configurePreviewServer' hook invoked!");
  },
  transformIndexHtml() {
    console.log("'transformIndexHtml' hook invoked!");
  },
  handleHotUpdate() {
    console.log("'handleHotUpdate' hook invoked!");
  },
};

export default vitePluginHooks;
