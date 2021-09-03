import { Component, h, Element, Event, EventEmitter } from "@stencil/core";

export interface PackageFilter {
    kind: "type" | "category" | "status";
    label: string;
    value: string;
}

@Component({
    tag: "pulumi-filter-select",
    shadow: false,
})
export class FilterSelect {

    @Element()
    el: HTMLElement;

    @Event()
    filter: EventEmitter<any[]>; // Momentary laziness -- will come back to this.

    onChange(event: Event) {
        event.stopPropagation();

        const filters = Array.from(this.el.querySelectorAll(`input[type="checkbox"]`))
            .filter((cb: HTMLInputElement) => cb.checked)
            .map((cb: HTMLInputElement) => {
                return {
                    kind: cb.getAttribute("data-kind"),
                    value: cb.value,
                }
            });

        this.filter.emit(filters);
    }

    render() {
        return <div onChange={ this.onChange.bind(this) }>
            <slot />
        </div>;
    }
}
