import { sassPlugin } from "@snowfall-ui/bun-plugin-styles"

const result = await Bun.build({
  minify: Bun.env.NODE_ENV === 'production',
  entrypoints: ['lib/index.js', "components/accordion.js"],
  outdir: 'dist',
  plugins: [sassPlugin({ web: true })]
})

console.log(...result.logs)
