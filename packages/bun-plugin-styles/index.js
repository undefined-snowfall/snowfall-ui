import { compile } from "sass"

/**
 * @type {import("bun").BunPlugin}
 */

export const sassPlugin = (options) => {
  return {
    name: "Sass Plugin",
    async setup(build) {
      build.onLoad({ filter: /\.scss$/ }, args => {
        const result = compile(args.path, { style: "compressed" })
        return {
          loader: "js",
          contents: options.web ? `const css = new CSSStyleSheet()\n css.replaceSync("${result.css}")\n export default css` : `export default "${result.css}"`
        }
      })
    }
  }
}
