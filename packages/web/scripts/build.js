const result = await Bun.build({
  minify: Bun.env.NODE_ENV === 'production',
  entrypoints: ['lib/index.js'],
  outdir: 'dist'
})

for (const log of result.logs) {
  console.log(log)
}
