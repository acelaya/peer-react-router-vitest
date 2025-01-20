import { useParsedQuery } from '@shlinkio/shlink-frontend-kit';

export function DummyComponent() {
  const query = useParsedQuery();
  console.log(query);

  return <span>Dummy</span>;
}
