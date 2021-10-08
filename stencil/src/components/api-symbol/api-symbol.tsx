import { Component, Element, Host, h, Method, State } from '@stencil/core';
import { getUUID } from "../../util/util";

export type ApiSymbolType = "resource" | "function" | "module";

@Component({
    tag: "pulumi-api-symbol",
    styles: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        height: "14px",
        width: 14,
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "50%",
        marginRight: "6px",
        fontWeight: 700,
        fontSize: 9,
    },
})
export class ApiSymbol {
    @Prop()
    type: ApiSymbolType;

    render() {
        const icon = this.type === "resource" ? "R" : this.type === "function" ? "F" : "M";
        const color = "rgb(62, 73, 174)";

        return (
            <span>{ icon }</span>
        );
    }
}
