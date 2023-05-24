import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "vite-plugin-sass";
import cssModules from "vite-plugin-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass(), cssModules()],
});
