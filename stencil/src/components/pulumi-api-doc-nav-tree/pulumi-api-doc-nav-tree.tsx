import { Component, h, Prop } from '@stencil/core';

export interface node {
    name: string,
    type: "module" | "function" | "resource",
    link: string,
    children?: node[], 
    isExpanded?: boolean;
}

@Component({
  tag: 'pulumi-api-doc-nav-tree',
  styleUrl: 'pulumi-api-doc-nav-tree.scss',
  shadow: true,
})

export class PulumiApiDocNavTree {
 @Prop()
  nodes: node[];

  getIcon(nodeType) {
    return <slot name="before-content"><span class={ `symbol ${nodeType}` }></span></slot>
  }

  getChildNodes() {
      return this.nodes.map(node =>
        
        <pulumi-tree-item slot="item" expanded={ `${!!node.isExpanded}` } class="nav-tree-item">{this.getIcon(node.type)}<slot name="content"><a href={ `${node.link}`}>{node.name}</a></slot>
        
        {node.children && node.children.map(childNode => 
        <pulumi-tree-item slot="item" expanded={ `${!!node.isExpanded}` } class="nav-tree-item">{this.getIcon(childNode.type)}<slot name="content"><a href={ `${childNode.link}`}>{childNode.name}</a></slot>


                {childNode.children && childNode.children.map(nextNode => 
        <pulumi-tree-item slot="item" expanded={ `${!!node.isExpanded}` } class="nav-tree-item">{this.getIcon(nextNode.type)}<slot name="content"><a href={ `${nextNode.link}`}>{nextNode.name}</a></slot></pulumi-tree-item>
        )}
        
        
        </pulumi-tree-item>
        )}

        </pulumi-tree-item>
      )
  }


  render() {
    return (
        <pulumi-tree-view>
          {this.getChildNodes()}
        </pulumi-tree-view>
    );
  }

}
