import { newE2EPage } from '@stencil/core/testing';

describe('slot-machine-result', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<slot-machine-result></slot-machine-result>');

    const element = await page.find('slot-machine-result');
    expect(element).toHaveClass('hydrated');
  });
});
