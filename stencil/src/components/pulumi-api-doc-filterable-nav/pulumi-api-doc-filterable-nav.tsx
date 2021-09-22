import { Component, h, Prop, State } from '@stencil/core';

export interface node {
    name: string,
    type: "module" | "function" | "resource",
    link: string,
    children?: node[], 
    isExpanded?: boolean;
}

const testNodes: node[] = [
    {
        name: "Some top level module",
        type: "module",
        link: "sometoplevelmodule",
        children: [
            {
                name: "A module child of another module",
                type: "module",
                link: "amodulechildofanothermodule",
                children: [
                    {
                        name: "resource 1",
                        type: "resource",
                        link: "resource1"
                    },
                    {
                        name: "resource 2",
                        type: "resource",
                        link: "resource2"
                    },
                    {
                        name: "resource 3",
                        type: "resource",
                        link: "resource3"
                    }
                ]
            }
        ]
    },
    {
        name: "Some other top level module",
        type: "module",
        link: "pulumi.com",
        children: [
            {
                name: "A resource",
                type: "resource",
                link: "aresource",
            }
        ]
    }
]

@Component({
  tag: 'pulumi-api-doc-filterable-nav',
  styleUrl: 'pulumi-api-doc-filterable-nav.scss',
  shadow: true,
})

export class PulumiApiDocFilterableNav {

  @Prop()
  nodes: node[] | any = testNodes;

  @State()
  currentlyRenderedNodes: node[] | any = testNodes;

  filterContent: string = '';

  searchTree(nodesToRender: node[], nodesToSearch: node[], isChild: boolean = false, rootNode?: node, ) {
    nodesToSearch.map((node) => {
      if (node.name.includes(this.filterContent)) {
        // Prevent duplicated trees if multiple children are matches
        const duplicateNode = nodesToRender.find(nodeToRender => nodeToRender.name === (rootNode?.name));

            // Except, we need to make the root node expanded if its not and its child is also a match, because the node is already in the array, but not with the isExpanded flag.
          if (duplicateNode){
            duplicateNode.isExpanded = true;
            return;
          }

        if (isChild){
          // should the expansion change as you search? like if i typed "cat" and a match showed, but "ca" removes one level of match?
          nodesToRender.push({...rootNode, isExpanded: true});
          // maybe get rid of children if we dont want to show those.
        } else {
          nodesToRender.push(node);
        }
      } 

      if (node.children){
        const nodesRootParent = rootNode ? rootNode : node;
        this.searchTree(nodesToRender, node.children, true, nodesRootParent)
      }
    });

    this.currentlyRenderedNodes = nodesToRender;
  }

  onChange(event) {
    this.filterContent = event.target.value;
    this.searchTree([], this.nodes);
  }

  render() {
    return (
      <div class="api-doc-nav">
        <div>API Navigation</div>
        <input type="text" placeholder="Cats" onInput={ this.onChange.bind(this) }></input>
        <pulumi-api-doc-nav-tree nodes={this.currentlyRenderedNodes}></pulumi-api-doc-nav-tree>
      </div>
    );
  }
}