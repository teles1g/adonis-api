module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    use: true,
  },
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'no-console': 'off'
  }
}
