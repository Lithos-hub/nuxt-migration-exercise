import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';

import app from './app.vue';

describe('app.vue', () => {
  it('should render the app view', () => {
    const { getByTestId } = render(app);
    expect(getByTestId('app')).toBeTruthy();
  });
});
