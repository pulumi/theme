import { initDesignSystem, disclosure } from "@pulumi/facet";
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
    components: [
        disclosure(),
    ],
});

// Register all Stencil components.
defineCustomElements();
