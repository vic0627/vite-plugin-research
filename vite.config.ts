import { defineConfig } from "vite";
import vitePluginHooks from "./plugins/vite-plugin-hooks";

export default defineConfig({
  plugins: [vitePluginHooks],
});
