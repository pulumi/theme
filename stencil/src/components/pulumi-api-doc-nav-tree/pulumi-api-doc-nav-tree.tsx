import { Component, h, Prop } from "@stencil/core";
import { APINavNode, APINavNodeType } from "../pulumi-api-doc-filterable-nav/pulumi-api-doc-filterable-nav";

@Component({
    tag: "pulumi-api-doc-nav-tree",
    styleUrl: "pulumi-api-doc-nav-tree.scss",
    shadow: true,
})
export class PulumiApiDocNavTree {
    @Prop()
    nodes: APINavNode[];

    @Prop()
    baseDirectory: string;

    getIcon(nodeType: APINavNodeType) {
        return (
            <div class="symbol-container">
                <slot name="before-content">
                    <span class={`symbol ${nodeType}`}></span>
                </slot>
            </div>
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
        // To compare the current path to the href, we strip the starting and ending slashes.
        const formattedCurrentPath = window.location.pathname
            .split("/")
            .filter((item) => item !== "")
            .join("/");
        const formattedNodeHref = nodeHref
            .split("/")
            .filter((item) => item !== "")
            .join("/");

        return formattedCurrentPath === formattedNodeHref;
    }

    getChildNodes(nodes: APINavNode[] = this.nodes, depth: number = 0, linkBase = "") {
        return nodes?.map((node) => {
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
                    <slot name="content">
                        <div class="content-container">
                            {this.getIcon(node.type)}
                            <a class={`depth-${depth}`} href={nodeHref}>
                                <span class="link-container">{node.name}</span>
                            </a>
                        </div>
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
