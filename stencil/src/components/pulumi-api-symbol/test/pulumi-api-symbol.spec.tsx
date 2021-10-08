import { newSpecPage } from '@stencil/core/testing';
import { ApiSymbol } from '../pulumi-api-symbol';

describe('pulumi-api-symbol', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApiSymbol],
      html: `<pulumi-api-symbol></pulumi-api-symbol>`,
    });
    expect(page.root).toEqualHtml(`
      <pulumi-api-symbol>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pulumi-api-symbol>
    `);
  });
});
