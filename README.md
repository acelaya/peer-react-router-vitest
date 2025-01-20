# React-router peer-dep + vitest reproduction

Temporary repository to reproduce issue with react-router when run in vitest, the root depends on react-router, and another dependency also has a peer dependency on react-router.

In that case, when that dependency imports from `react-router`, it ends with a different instance than the one resolved for the root project imports.

## Project explanation

The project includes two components in the `src` dir, `App` and `DummyComponent`.

* `App` only creates a `BrowserRouter` and adds `DummyComponent` inside of it.
* `DummyComponent` imports a hook from the `@shlinkio/shlink-frontend-kit` package, which [internally imports `useLocation` from `react-router`](https://github.com/shlinkio/shlink-frontend-kit/blob/8dcf9f6b622dbde5a8170cf921262555136b5372/src/hooks/index.ts#L45).

When this is bundled for the web with vite, everything works as expected, but when trying to render `DummyComponent` in a vitest test, it errors with `useLocation() may be used only in the context of a <Router> component`, even if the test makes sure to wrap it in a `MemoryRouter` (or any other kind of router).

The issue is reproducible with node 22.12 or later. It works as expected with older node.js versions.

## Steps to reproduce

1. Clone this: `git clone git@github.com:acelaya/peer-react-router-vitest.git`.
2. Make sure you are using node `22.12` or newer. Instructions can be found here https://nodejs.org/en/download
3. Install dependencies: `npm install`.
4. Open in the browser: `npm run dev`. You should be able to open the URL in printed in the console, and see no errors.
5. Run tests with vitest: `npm run test`. The only existing test should fail with `Error: useLocation() may be used only in the context of a <Router> component.`
