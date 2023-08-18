import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        ref: true, // Forward the ref to the root SVG tag.
        icon: true, // Replace SVG width and height with
        // 1em to make SVG inherit text size.
        /* ... */
      },
    }),
    react(),
  ],
});
