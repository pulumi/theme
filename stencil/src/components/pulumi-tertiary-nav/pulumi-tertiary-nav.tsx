import { Component, Host, h, Prop } from "@stencil/core";

export interface TertiaryNavItem {
  // The anchor for the content that the nav item controls viewability of
  anchor: string;
  // The text that should show for the nav item
  label: string;
}

@Component({
    tag: "pulumi-tertiary-nav",
    styleUrl: "pulumi-tertiary-nav.css",
    shadow: false,
})
export class PulumiTertiaryNav {
    // TertiaryNavItem[], passed into the component as stringified JSON
    @Prop({ mutable: true })
    items: string;

    @Prop({ mutable: true })
    parsedItems: TertiaryNavItem[];

    @Prop({ mutable: true })
    tabContent: string[];

    // The currently selected tab.
    @Prop({ mutable: true })
    selection: any;

    componentWillLoad() {
        this.parsedItems = JSON.parse(this.items);

        // Collection of anchor tags
        this.tabContent = this.parsedItems.map((item) => item.anchor);

        // The first tab is selected on initial load.
        this.selectTab(this.parsedItems[0]);
    }

    private selectTab(item: TertiaryNavItem) {
        this.selection = item.anchor;

        $(`#${item.anchor}`).removeClass("hidden");
        const unselectedTabs = this.tabContent.filter((value) => value !== item.anchor);

        unselectedTabs.forEach((tab) => {
            $(`#${tab}`).addClass("hidden");
        });
    }

    render() {
        return (
            <Host>
                <ul>
                    {this.parsedItems.map((item: TertiaryNavItem) => (
                        <li class={this.selection === item.anchor ? "active" : ""}>
                            <a onClick={() => this.selectTab(item)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </Host>
        );
    }
}
