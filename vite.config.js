import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name ?? "";
          if (name.endsWith(".css")) return "browly.css";
          return "[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    open: true,
    port: 5173,
  },
});
