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

    getIcon(nodeType) {
        return (
            <slot name="before-content">
                <pulumi-api-symbol type={nodeType}></pulumi-api-symbol>
            </slot>
        );
    }

    getChildNodes(nodes: node[] = this.nodes, depth: number = 0, linkBase = '') {
        return nodes.map((node) => (
            <pulumi-tree-item slot="item" expanded={!!node.isExpanded} class="nav-tree-item" title={node.name}>
                {this.getIcon(node.type)}
                <slot name="content">
                    <a class={`depth-${depth}`} href={`${linkBase}${node.link}`}>{node.name}</a>
                </slot>
                {node.children && this.getChildNodes(node.children, depth + 1, linkBase + node.link)}
            </pulumi-tree-item>
        ));
    }

    render() {
        return <pulumi-tree-view>{this.getChildNodes()}</pulumi-tree-view>;
    }
}
