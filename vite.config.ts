import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), dts(), svgr()],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "MyVideoPlayer",
      fileName: (format) => `video-player.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  assetsInclude: ["**/*.svg"],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
