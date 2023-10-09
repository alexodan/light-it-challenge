# About the challenge

## How to run it

To run locally just

```shell
yarn
yarn panda # generates the styles
yarn dev
```

## Stack used

- React
- TypeScript
- [Panda css](https://panda-css.com/docs/)
- [TS Hooks (useFetch)](https://usehooks-ts.com/)
- [Zod (validation)](https://zod.dev/)
- Eslint
- Prettier

## Decisions decisions

- I used React since is the library I'm used to work with and still enjoy very much using it.
- For styling, I opted for Panda CSS, a CSS-in-JS library. I've only used it for a pet project, but I found the development experience satisfying. Besides, I wanted to rest from Tailwind.
- I added TS Hooks to have `useFetch`. If persistence were a requirement, I would likely have used React Query.
- Eslint and prettier, mandatory in my projects.

## Resources

- Zod formData built-in support discussion https://github.com/colinhacks/zod/discussions/1860
- Form validations and accessibility https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
