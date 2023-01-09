# eslint-config-apolo-angular
ESLint configuration based on apolo for angular projects.

## Usage

1- Install eslint-config-apolo

```jsx
npm install --save-dev eslint-config-apolo-angular // This will download the @latest version
npm install --save-dev eslint-config-apolo-angular@1.0.0 // Or can select version
```

2- Add in “extends” of your .eslintrc file: “apolo-angular” on your angular project

```jsx
{
...,
"extends": [
		...,
		"apolo-angular"
	]
}
```

You can make sure this module lints with itself using `npm run lint`
