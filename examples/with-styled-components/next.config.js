module.exports = {
  babel: ({ babelConfig, options }) => {
    babelConfig.plugins.push(['styled-components', { ssr: true }])
    return babelConfig
  }
}
