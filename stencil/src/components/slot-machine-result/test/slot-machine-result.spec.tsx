import { newSpecPage } from '@stencil/core/testing';
import { SlotMachineResult } from '../slot-machine-result';

describe('slot-machine-result', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlotMachineResult],
      html: `<slot-machine-result></slot-machine-result>`,
    });
    expect(page.root).toEqualHtml(`
      <slot-machine-result>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </slot-machine-result>
    `);
  });
});
