import { Component, h, Prop } from "@stencil/core";
import { node } from "../pulumi-api-doc-filterable-nav/pulumi-api-doc-filterable-nav";

@Component({
    tag: "pulumi-api-doc-nav-tree",
    styleUrl: "pulumi-api-doc-nav-tree.scss",
    shadow: true,
})
export class PulumiApiDocNavTree {
    @Prop()
    nodes: node[];

    getChildNodes(nodes: node[] = this.nodes, depth: number = 0, linkBase = '') {
        return nodes.map((node) => {
            const className = `api-symbol api-symbol--small api-symbol--${node.type}`;
            
            return (
                <pulumi-tree-item slot="item" expanded={!!node.isExpanded} class="nav-tree-item" title={node.name}>
                    <slot name="before-content">
                        <span class={className}></span>
                    </slot>
                    <slot name="content">
                        <a class={`depth-${depth}`} href={`${linkBase}${node.link}`}>{node.name}</a>
                    </slot>
                    {node.children && this.getChildNodes(node.children, depth + 1, linkBase + node.link)}
                </pulumi-tree-item>
            );
        });
    }

    render() {
        return <pulumi-tree-view>{this.getChildNodes()}</pulumi-tree-view>;
    }
}
