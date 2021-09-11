import { initDesignSystem, disclosure, accordion, accordionItem, button } from "@pulumi/facet";
import { defineCustomElements } from "../../stencil/dist";

import "../scss/main.scss";

import "./misc";
import "./nav";
import "./carousel";
import "./chooser";
import "./price-toggle";
import "./noselect";
import "./tracking";
import "./docs-feedback";
import "./event-filtering";
import "./copybutton";
import "./code-tabbed";
import "./resources";
import "./search";
import "./packages";

// Initialize the Facet design system and components.
initDesignSystem({
    prefix: "pulumi",
    theme: "web",
    mode: "dark",
    components: [
        disclosure(),
        accordion(),
        accordionItem(),
        button(),
    ],
});

import { fuchsiaPalette, bluePalette, redPalette, greenPalette } from "@pulumi/facet";

[ fuchsiaPalette, bluePalette, redPalette, greenPalette ].forEach(p => {
    const ul = document.createElement("ul");

    p.swatches.map(s => {
        const li = document.createElement("li");
        li.style.backgroundColor = s.toColorString();
        li.style.height = "100px";
        li.style.margin = "1px";
        li.style.width = "100px";
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
});

// Register all Stencil components.
defineCustomElements();
