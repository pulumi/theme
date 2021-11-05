import { Component, h, Prop } from "@stencil/core";
import { APINavNode } from "../pulumi-api-doc-filterable-nav/pulumi-api-doc-filterable-nav";

@Component({
    tag: "pulumi-api-doc-nav-tree",
    styleUrl: "pulumi-api-doc-nav-tree.scss",
    shadow: false,
})
export class PulumiApiDocNavTree {
    @Prop()
    nodes: APINavNode[];

    @Prop()
    baseDirectory: string;

    getNodes(nodes: APINavNode[] = this.nodes) {
        return nodes?.map((node) => {
            return (
                <details
                    open={node.isExpanded}
                    data-expandable={
                        node.children && node.children.length > 0
                            ? "true"
                            : "false"
                    }
                >
                    <summary>
                        <a href={`${this.baseDirectory}${node.link}`}>
                            {node.name}
                        </a>
                    </summary>
                    {node.children && this.getNodes(node.children)}
                </details>
            );
        });
    }

    render() {
        return <div>{this.getNodes()}</div>;
    }
}
