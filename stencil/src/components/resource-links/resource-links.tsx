import { Component, Prop, State, h } from "@stencil/core";
// import { resources } from "./resources";

// Scroll to top button.
@Component({
    tag: "pulumi-resource-links",
    styleUrl: "resource-links.scss",
    shadow: false,
})
export class ResourceLinks {
    @Prop()
    packageName: string;

    @Prop()
    moduleName: string;

    @Prop()
    resourceName: string;

    @State()
    relatedResources: {};

    componentWillLoad() {
        fetch("https://www.pulumi.com/uploads/related-resources/2022-12-15.json")
        .then(resp => resp.json())
        .then((response) => {
            this.relatedResources = response;
        })
        .catch(err => console.error(err))
    }

    render() {
        if (!this.relatedResources) {
            return <div></div>
        }
        const pkg = this.packageName.toLowerCase();
        const module = this.moduleName.toLowerCase();
        const typ = this.resourceName.toLowerCase();
        
        const related = this.relatedResources[pkg][module][typ];

        if (!related) {
            return <div></div>
        }

        return (
            <div class="container">
                <div class="heading">Related Resources</div>
                    {
                        related.map(t => {
                            const parts = t.split("/");
                            let module = parts.slice(0, parts.length-1).join("/");
                            const resource = parts[parts.length-1];
                            const rellink = `/registry/packages/${pkg}/api-docs/${module}/${resource.toLowerCase()}/`;
                            return <div class="links"><a href={rellink}>{`${module}`}.{`${resource}`}</a></div>
                        })
                    }
            </div>
        );
    }
}
