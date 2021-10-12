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

    @Prop()
    baseDirectory: string;

    getIcon(nodeType) {
        return (
            <slot name="before-content">
                <span class={`api-symbol api-symbol--small api-symbol--${nodeType}`}></span>
            </slot>
        );
    }

    // If a node is in the path for the page a user is currently on, it should
    // be expanded, even if the expansion icon has not been clicked.
    isNodeInPathForCurrentlyVisiblePage(nodeName) {
        const currentPath = window.location.pathname;
        return currentPath.includes(`/${nodeName}/`);
    }

    // If a node is an exact match for the page a user is currently on
    // (not just in the path), it should be selected,
    // even if it has not been clicked by the user.
    shouldNodeBeSelected(nodeHref) {
        const currentPath = window.location.pathname;
        return currentPath === `/${nodeHref}/`;
    }

    getChildNodes(nodes: node[] = this.nodes, depth: number = 0, linkBase = "") {
        return nodes.map((node) => {
            const nodePath = `${linkBase}${node.link}`;
            const nodeHref = `${this.baseDirectory}${nodePath}`;

            return (
                <pulumi-tree-item
                    slot="item"
                    selected={!!this.shouldNodeBeSelected(nodeHref)}
                    expanded={!!node.isExpanded || this.isNodeInPathForCurrentlyVisiblePage(node.name)}
                    class="nav-tree-item"
                    title={node.name}
                >
                    {this.getIcon(node.type)}
                    <slot name="content">
                        <a class={`depth-${depth}`} href={nodeHref}>
                            {node.name}
                        </a>
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
