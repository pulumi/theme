import { Component, h, Prop } from "@stencil/core";

export interface PackageFilter {
    bucket: "type" | "status" | "category";
    label: string;
    value: string;
}

@Component({
    tag: "pulumi-filter-select-option",
    shadow: false,
})
export class FilterSelectOption {

    @Prop()
    kind: keyof PackageFilter;

    @Prop()
    value: string;

    render() {
        return <div>
           <label>
                <input data-kind={this.kind} type="checkbox" value={this.value} />
                <slot />
            </label>
        </div>;
    }
}
