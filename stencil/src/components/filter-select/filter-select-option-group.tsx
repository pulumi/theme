import { Component, h } from "@stencil/core";

@Component({
    tag: "pulumi-filter-select-option-group",
    shadow: false,
})
export class FilterSelectOptionGroup {

    onSlotChange() {
        console.log("change");
    }

    render() {
        return <div>
            <slot name="label" />
            <slot />
        </div>;
    }
}
