import { Component, h, Prop, State } from "@stencil/core";
import { debounce } from "lodash";
export interface node {
    // The below properties come from the JSON data.
    name: string;
    type: "module" | "function" | "resource";
    // Relative path to the relevant page.
    link: string;
    children?: node[];
    // The below properties are added during the filtering search process
    // to allow for accurate rendering of the rebuilt tree after search.
    isExpanded?: boolean;
    parentName?: string;
}

@Component({
    tag: "pulumi-api-doc-filterable-nav",
    styleUrl: "pulumi-api-doc-filterable-nav.scss",
    shadow: true,
})
export class PulumiApiDocFilterableNav {
    constructor() {
        // We debounce the filter tree call so that we are not performing unnecessary work while
        // a user is in the middle of typing their filter criteria.  Eg, if a user is typing
        // "cats", debouncing helps keep us from invoking the tree filtering function
        // with "c", then with "ca", then "cat", then "cats," and instead lets us wait until enough
        // time has passed that a user is likely done typing, and we only invoke with "cats."
        this.filterTree = debounce(this.filterTree, 150);
    }

    componentWillLoad() {
        // Parse the JSON that's passed through as a prop.
        this.parsedNodes = JSON.parse(this.nodes);
        // Before the user interacts with the filter, the nodes to render should be the full nav tree.
        this.currentlyRenderedNodes = this.parsedNodes;
    }

    private textInput?: HTMLInputElement;

    @Prop()
    nodes: string;

    @State()
    parsedNodes: node[];

    @State()
    currentlyRenderedNodes: node[];

    filterContent: string = "";

    // By default, this component renders the full navigation tree, which includes all of the nodes represented in the
    // `nodes` prop.  However, when a user interacts with the text input that is a part of this component, the expectation
    // is that the tree will update to only render nodes that match the text input (and their parents/root nodes, where applicable).
    // This function filters the full tree to find the matches to render, and then reconstructs the tree.
    filterTreeToMatchingContent(
        nodesToRender: node[],
        nodesToSearch: node[],
        rootNode?: node,
        directParentNode?: node
    ) {
        nodesToSearch.map((node) => {
            // Check if the nodes we're currently working with are already represented in the array of nodes to render.
            const isNodeDuplicate = !!nodesToRender.find((nodeToRender) => nodeToRender.name === node.name);
            const isRootDuplicate = !!nodesToRender.find((nodeToRender) => nodeToRender.name === rootNode?.name);
            const isParentDuplicate = !!nodesToRender.find(
                (nodeToRender) => nodeToRender.name === directParentNode?.name
            );

            // If the node's already in our flat array, it will be rendered, and no more logic needs to be executed.
            if (isNodeDuplicate) {
                return;
            }

            // Check if the node is a match to the filter content.  If it is a match,
            // we need to add it to our array to be rendered, and perform some additional checks.
            if (node.name.toLowerCase().includes(this.filterContent)) {
                // If the node is a child, we need to ensure the full tree path to get to the child is also rendered.
                // To accomplish that, we check that the current node's root node is not already in our array to be rendered, and then add
                // it with an empty list of children.  The empty list of children ensures that the only children rendered will
                // be matches to the filter content.
                if (!isRootDuplicate && rootNode) {
                    nodesToRender.push({ ...rootNode, children: [], isExpanded: true });
                }

                // We do the same as above, but for the current node's direct parent.  The only difference is that
                // we know the direct parent's parent is the root node, so we add that for reconstructing the new
                // tree later on.
                if (!isParentDuplicate && directParentNode) {
                    nodesToRender.push({
                        ...directParentNode,
                        children: [],
                        isExpanded: true,
                        parentName: rootNode.name,
                    });
                }

                // Now we add the matching node to the array to be rendered.
                // The only difference in logic is that we need to name the current node's parent, to recontruct the tree correctly.

                // If there's a direct parent node, that's the parent.
                if (directParentNode) {
                    nodesToRender.push({ ...node, children: [], parentName: directParentNode.name, isExpanded: true });
                    // If there's no direct parent, but there is a root, then the root's the parent.
                } else if (rootNode) {
                    nodesToRender.push({ ...node, children: [], parentName: rootNode.name, isExpanded: true });
                    // Otherwise, the current node is a root, with no parent.
                } else {
                    nodesToRender.push({ ...node, children: [], parentName: undefined, isExpanded: true });
                }
            }

            // Now, we have to check if any children of the current node are matches and execute the same logic.
            // That includes passing along the node's root and direct parent, since we'll need them if the child is a match.
            if (!!node.children) {
                const nodesRootParent = rootNode ? rootNode : node;
                const nodesDirectParent = rootNode ? node : null;
                this.filterTreeToMatchingContent(nodesToRender, node.children, nodesRootParent, nodesDirectParent);
            }
        });

        // Now that we have a flat array of all the nodes we need to render, we need to reconstruct the tree of matches.

        // Iterate over all the nodes to match the parents with their children, starting with the root nodes.
        const reconstructedTreeOfMatches = nodesToRender.filter(
            (nodeToRender) => nodeToRender.parentName === undefined
        );
        reconstructedTreeOfMatches.map((root) => {
            root.children = nodesToRender.filter((nodeToRender) => nodeToRender.parentName === root.name);

            root.children?.map((child) => {
                child.children = nodesToRender.filter((nodeToRender) => nodeToRender.parentName === child.name);
            });
        });

        // Update the currently rendered nodes to be the matches found above.
        this.currentlyRenderedNodes = [...reconstructedTreeOfMatches];
    }

    onChange(event: KeyboardEvent) {
        this.filterContent = (event.target as HTMLInputElement).value.trim().toLowerCase();
        this.filterTree();
    }

    onClearFilter(){
        this.currentlyRenderedNodes = this.parsedNodes;
        this.filterContent = '';
        this.textInput.value = this.filterContent;
    }

    filterTree() {
        // If the user deletes the filter content, we should revert back to showing the full navigation tree.
        if (this.filterContent === "") {
            this.currentlyRenderedNodes = this.parsedNodes;
            return;
        }

        // Otherwise, find the nodes that match the filter content.
        this.filterTreeToMatchingContent([], this.parsedNodes);
    }

    render() {
        return (
            <section class="api-doc-nav">
                <h3 class="navigation-header">API Navigation</h3>
                <div class="filter-and-nav-tree">
                    <div class="input-container">
                        <input
                            class="navigation-filter-input"
                            placeholder="Filter"
                            onInput={this.onChange.bind(this)}
                            ref={el => this.textInput = el as HTMLInputElement}
                        >
                        </input>
                        <div class="clear-container"><button onClick={this.onClearFilter.bind(this)}class="clear-filter-button">X</button></div>
                    </div>
                    {this.currentlyRenderedNodes.length < 1 && <div class="no-results">No results found. Try a different filter.</div>}
                    <pulumi-api-doc-nav-tree
                        class="nav-tree"
                        nodes={this.currentlyRenderedNodes}
                    ></pulumi-api-doc-nav-tree>
                </div>
            </section>
        );
    }
}
