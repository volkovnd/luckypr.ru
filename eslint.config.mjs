// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  [
    {
      rules: {
        '@stylistic/object-curly-newline': [
          'error',
          {
            minProperties: 2,
            consistent: false,
            multiline: true,
          },
        ],
        '@stylistic/curly-newline': [
          'error',
          'always',
        ],
        '@stylistic/array-element-newline': [
          'error',
          {
            minItems: 2,
            multiline: true,
            consistent: false,
          },
        ],
        '@stylistic/array-bracket-newline': [
          'error',
          {
            minItems: 2,
            multiline: true,
          },
        ],
        '@stylistic/object-property-newline': [
          'error',
          { allowAllPropertiesOnSameLine: false },
        ],
      },
    },
  ])
