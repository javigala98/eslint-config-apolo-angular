module.exports = {
  root: true,
  ignorePatterns: ['.angular', 'dist', 'node_modules'],
  extends: ['prettier', 'apolo'],
  overrides: [
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            parser: 'angular'
          }
        ]
      }
    }
  ]
};
