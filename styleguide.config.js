const path = require('path')
const { version } = require('./package')

module.exports = {
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx')
    return `import { ${name} } from 'fat-cat-component-library';`
  },
  skipComponentsWithoutExample: true,
  version,
  propsParser: require('react-docgen-typescript').parse,
  sections: [
    {
      name: 'Introduction',
      content: './docs/introduction.md',
    },
    {
      name: 'Components',
      components: 'src/components/**/*.tsx',
    },
  ],
}
