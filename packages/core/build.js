import { sassPlugin } from "@snowfall-ui/bun-plugin-styles"

const result = await Bun.build({
  outdir: "dist",
  plugins: [sassPlugin({ web: true })],
  entrypoints: ["components/accordion.scss"]
})

console.log(...result.logs)
