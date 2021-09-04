import { Component, h, Element, Prop } from "@stencil/core";
@Component({
    tag: "pulumi-filter-select-option-group",
    shadow: true,
    styles: `
        div {
            position: relative;
            padding: 2px 4px;
            border-radius: 4px;
        }

        slot[name="label"] {
            display: flex;
            cursor: pointer;
            padding: 2px 10px;
        }

        slot[name="label"]::after {
            content: "▾";
        }

        .options {
            display: none;
            position: absolute;
            background-color: var(--fill-color);
            color: var(--neutral-foreground-rest);
        }

        :host([expanded]) .options {
            display: block;
        }

        :host([expanded]) slot[name="label"]::after {
            transform: rotate(180deg);
        }
    `,
})
export class FilterSelectOptionGroup {

    @Element()
    el: HTMLElement;

    @Prop()
    name: string;

    @Prop({ reflect: true })
    expanded: boolean;

    onToggle() {
        this.expanded = !this.expanded;
    }

    render() {
        return <div onClick={ this.onToggle.bind(this) }>
            <slot name="label" />
            <div class="options">
                <slot />
            </div>
        </div>;
    }
}
