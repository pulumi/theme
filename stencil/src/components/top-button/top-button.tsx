import { Component, Listen, State, h } from "@stencil/core";
import { resources } from "./resources"

// Scroll to top button.
@Component({
    tag: "pulumi-top-button",
    styleUrl: "top-button.scss",
    shadow: false,
})
export class TopButton {
    @State()
    visible: string;

    @Listen("scroll", { target: "window" })
    handleScroll() {
        this.setVisibility();
    }

    componentWillRender() {
        this.setVisibility();
    }

    render() {

        function getPackageFromType(typ) {
            const parts = typ.split(":");
            const pkg = parts[0];
            return pkg;
        }
        
        function getModuleFromType(typ) {
            const parts = typ.split(":");
            const module = parts[1].split("/")[0];
            return module;
        }
        
        function getResourceFromType(typ) {
            const parts = typ.split(":");
            const resource = parts[1].split("/")[1];
            return resource;
        }

        function getObjFromType(typ) {
            const parts = typ.split(":");
            return parts[2];
        }

        var pathArray = window.location.pathname.split('/');
        const provider = pathArray[3];
        const module = pathArray[5];
        const typ = pathArray[6];

        // console.log("provider", provider, "module", module, "type", typ)
        // let buttonClass = `btn-scroll-top fas fa-chevron-up ${this.visible}`;
        // return <a class={buttonClass} title="Scroll to top" href="#"></a>;
        const related = Object.keys(resources).filter(r => {
            return provider === getPackageFromType(r) &&
            module === getModuleFromType(r) &&
            typ === getResourceFromType(r) 
        }).map(r => {
            return resources[r]
        });
        console.log("related", related)

        return related[0].map(t => {
            console.log(t)
            const module = getModuleFromType(t.type)
            const res = getObjFromType(t.type)
            return <li class="h2"><a href={`../../${module.toLowerCase()}/${res.toLowerCase()}`}>{`${module}/${res}`}</a></li>
        }).slice(0,5);

    }

    setVisibility() {
        this.visible = window.scrollY > 2500 ? "visible" : "hidden";
    }
}
