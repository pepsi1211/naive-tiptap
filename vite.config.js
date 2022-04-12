import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import Components from 'unplugin-vue-components/vite';  // 自动引入组件, 省略import NaiveUiResolver
// import { NaiveUiResolver } from "unplugin-vue-components/resolvers"; // 内置预设 naive ui 的自动引入

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // your plugin installation
    // Components({
    //   resolvers: [NaiveUiResolver()],
    // }),
  ],
  server: {
    port: 26777,
  }
});
