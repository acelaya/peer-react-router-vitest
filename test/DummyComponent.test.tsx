import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router';
import { DummyComponent } from '../src/DummyComponent';
import { render } from '@testing-library/react';

describe('DummyComponent', () => {
  it('fails to import correct router instance', () => {
    render(
      <MemoryRouter>
        <DummyComponent />
      </MemoryRouter>
    );
  });
});
