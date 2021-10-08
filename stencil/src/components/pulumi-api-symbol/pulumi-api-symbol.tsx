import { Component, h, Prop } from '@stencil/core';

export type ApiSymbolType = "resource" | "function" | "module";

@Component({
    tag: "pulumi-api-symbol",
    styleUrl: "pulumi-api-symbol.scss",
})
export class ApiSymbol {
    @Prop()
    type: ApiSymbolType;
    
    @Prop()
    size?: "small" | "large";

    render() {
        const icon = this.type === "resource" ? "R" : this.type === "function" ? "F" : "M";
        const color = this.type === "resource" ? "blue" : this.type === "function" ? "red" : "green";
        const sizeClass = this.size ? `symbol-${this.size}` : "";

        return (
            <span class={`symbol ${sizeClass} symbol-${this.size} text-${color}-700 border-${color}-700`}>
                { icon }
            </span>
        );
    }
}