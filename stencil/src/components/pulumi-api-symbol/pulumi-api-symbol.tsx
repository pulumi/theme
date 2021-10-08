import { Component, h, Prop } from '@stencil/core';

export type ApiSymbolType = "resource" | "function" | "module";

@Component({
    tag: "pulumi-api-symbol",
    styleUrl: "pulumi-api-symbol.scss",
})
export class ApiSymbol {
    @Prop()
    type: ApiSymbolType;

    render() {
        const icon = this.type === "resource" ? "R" : this.type === "function" ? "F" : "M";
        const color = "rgb(62, 73, 174)";

        return (
            <span style={{ color }}>{ icon }</span>
        );
    }
}