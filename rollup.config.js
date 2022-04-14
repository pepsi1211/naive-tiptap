import path from "path";
import vue from "@vitejs/plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import replace from "@rollup/plugin-replace";

const libDir = path.resolve(__dirname, "lib");
const srcDir = path.resolve(__dirname, "src");

function getConfig({ file, format }) {
  return {
    input: path.resolve(srcDir, "index.js"),
    output: {
      file,
      name: "NaiveTiptap",
      exports: "named",
      format,
      globals: {
        vue: "Vue",
        // TODO: tiptap
        // "element-ui/lib/button": "ELEMENT.Button",
        // "element-ui/lib/checkbox": "ELEMENT.Checkbox",
        // "element-ui/lib/tooltip": "ELEMENT.Tooltip",
        // "element-ui/lib/dialog": "ELEMENT.Dialog",
        // "element-ui/lib/popover": "ELEMENT.Popover",
        // "element-ui/lib/upload": "ELEMENT.Upload",
        // "element-ui/lib/message-box": "ELEMENT.MessageBox",
        // "element-ui/lib/dropdown": "ELEMENT.Dropdown",
        // "element-ui/lib/dropdown-menu": "ELEMENT.DropdownMenu",
        // "element-ui/lib/dropdown-item": "ELEMENT.DropdownItem",
      },
    },
    external: [
      "vue",
      "tiptap",
      "tiptap-extensions",
      // "prosemirror-utils",
      // "prosemirror-state",
      // "prosemirror-model",
      // "prosemirror-tables",
      // "element-ui/lib/button",
      // "element-ui/lib/checkbox",
      // "element-ui/lib/tooltip",
      // "element-ui/lib/dialog",
      // "element-ui/lib/popover",
      // "element-ui/lib/upload",
      // "element-ui/lib/message-box",
      // "element-ui/lib/dropdown",
      // "element-ui/lib/dropdown-menu",
      // "element-ui/lib/dropdown-item",
      // "vue-awesome",
    ],
    plugins: [
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      alias({
        entries: {
          "@": srcDir,
        },
      }),
      resolve({
        extensions: [".js", ".vue"],
      }),
      // typescript({
      //   clear: true,
      //   typescript: require("typescript"),
      // }),
      commonjs({
        extensions: [".js"],
      }),
      // postcss({
      //   extract: path.resolve(libDir, "index.css"),
      //   minimize: true,
      //   plugins: [postcssPresetEnv()],
      // }),
      // vue({
      //   defaultLang: {
      //     style: "scss",
      //   },
      //   css: false,
      // }),
      vue(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'runtime',
        extensions: [".js", ".ts"],
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
        plugins: [
          [
            "component",
            {
              libraryName: "naive-ui",
            },
          ],
        ],
      }),
    ],
  };
}

export default () => [
  getConfig({
    file: path.resolve(libDir, "naive-tiptap.min.js"),
    format: "umd",
  }),
  getConfig({
    file: path.resolve(libDir, "naive-tiptap.esm.js"),
    format: "es",
  }),
];
