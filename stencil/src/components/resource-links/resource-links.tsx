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
        fetch("https://gist.githubusercontent.com/sean1588/516dc164f8705572db7eb7c3420ec3ab/raw/e88fd819e05a78fe1d8858203098ada8604c7ca7/related-resources.json")
        .then(resp => resp.json())
        .then((response) => {
            console.log(response)
            this.relatedResources = response
        })
    }

    render() {
        if (!this.relatedResources) {
            return <div></div>
        }
        const provider = this.packageName.toLowerCase();
        const module = this.moduleName.toLowerCase();
        const typ = this.resourceName.toLowerCase();
        
        const related = this.relatedResources[provider][module][typ];

        if (!related) {
            return <div></div>
        }

        return (
            <div class="container" style={{display: ""}}>
                <div class="heading">Related Resources</div>
                    {
                        related.map(t => {
                            const parts = t.split("/");
                            const res = parts[parts.length-1];
                            const module = parts.slice(0, parts.length-1).join("/");
                            const rellink = parts.slice(0, parts.length).map(_ => "../").join("");
                            return <div class="links"><a href={`${rellink}${module.toLowerCase()}`}>{`${module}`}</a> / <a href={`${rellink}${t.toLowerCase()}`}>{`${res}`}</a></div>
                        })
                    }
            </div>
        );
    }
}
