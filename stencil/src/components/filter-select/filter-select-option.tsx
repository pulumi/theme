import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

export interface Filter {
    label: string;
    value: string;
}

@Component({
    tag: "pulumi-filter-select-option",
    shadow: true,
    styles: `
        label {
            white-space: nowrap;
        }

        input {
            margin-right: 0.5em;
        }
    `,
})
export class FilterSelectOption {

    @Prop()
    value: string;

    @Prop()
    selected: boolean;

    @Event({ composed: true, bubbles: true, cancelable: true })
    optionChange: EventEmitter<any>;

    onChange(event: CustomEvent) {
        this.selected = (event.target as HTMLInputElement).checked;
        this.optionChange.emit({ option: { value: this.value, selected: this.selected } });
    }

    render() {
        return <div>
           <label>
                <input
                    type="checkbox"
                    value={this.value}
                    onChange={ this.onChange.bind(this) }
                    checked={this.selected}
                />
                <slot />
            </label>
        </div>;
    }
}
