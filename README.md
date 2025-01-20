# React-router peer-dep + vitest reproduction

Temporary repository to reproduce issue with react-router when run in vitest, the root depends on react-router, and another dependency also has a peer dependency on react-router.

In that case, when that dependency imports from `react-router`, it ends with a different instance than the one resolved for the root project imports.
