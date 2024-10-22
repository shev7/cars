import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "cars",
  resolve: {
    alias: {
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@templates": path.resolve(__dirname, "./src/components/templates"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
