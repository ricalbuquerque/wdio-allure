module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ['*.mock-sdk.js'],
  globals: {
    assert: true,
    expect: true,
    browser: true,
    $: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    "plugin:wdio/recommended",
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: ['@typescript-eslint', 'wdio', 'simple-import-sort', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'none',
        singleQuote: true
      },
      {
        usePrettierrc: false
      }
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-console': ['error'],
    'no-debugger': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1
      }
    ],
    semi: ['error', 'always'],
    'no-case-declarations': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always'
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_$' }],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['#region', '#endregion', 'region', 'endregion']
        }
      }
    ],
    'linebreak-style': ['error', 'unix'],
    camelcase: ['error', { properties: 'always' }],
    'security/detect-object-injection': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-await-in-loop': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'prefer-regex-literals': 'off',
    'security/detect-non-literal-regexp': 'off',
    'security/detect-unsafe-regex': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    'no-promise-executor-return': 'off'
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/']
      },
      typescript: {}
    }
  },
};
