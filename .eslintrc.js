module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
  },
};

// module.exports = {
//   env: {
//     es6: true,
//     node: true,
//     mocha: true,
//   },
//   extends: [
//     'airbnb-base',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:@typescript-eslint/recommended-requiring-type-checking',
//     'plugin:import/typescript',
//   ],
//   globals: {
//     artifacts: 'readonly',
//     contract: 'readonly',
//     assert: 'readonly',
//     web3: 'readonly',
//   },
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     warnOnUnsupportedTypeScriptVersion: false,
//     project: ['./tsconfig.json', './tsconfig.eslint.json'],
//   },
//   plugins: ['@typescript-eslint', 'import'],
//   rules: {
//     '@typescript-eslint/indent': ['error', 2],
//     indent: ['error', 2],
//     'no-console': 'off',
//     'no-restricted-syntax': 'off',
//     'max-len': ['error', { code: 150 }],
//     'comma-dangle': ['error', 'always-multiline'],
//     'no-mixed-operators': 'off',
//     'object-curly-newline': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/await-thenable': 'off',
//     'no-empty-character-class': 'off', // causing linter to crash
//     'no-regex-spaces': 'off', // causing linter to crash
//     semi: ['error', 'always'],
//     quotes: ['error', 'single'],
//     indent: ['error', 2],
//     'comma-specing': ['error', { before: true, after: false }],
//   },
//   settings: {
//     'import/resolver': {
//       typescript: {
//         directory: './tsconfig.json',
//       },
//     },
//   },
// };
