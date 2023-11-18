// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  ignores: [
    'dist',
    'node_modules',
    'schema',
    '**/*.tmpl.*',
    'sw.js',
  ],
  rules: {
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/custom-event-name-casing': ['error', 'kebab-case', {
      ignores: [],
    }],
  },
})
