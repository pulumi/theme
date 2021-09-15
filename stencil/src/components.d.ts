/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ChooserKey, ChooserMode, ChooserType, OSKey } from "./components/chooser/chooser";
import { ChooserKey as ChooserKey1, ChooserMode as ChooserMode1, ChooserOptionStyle, ChooserType as ChooserType1 } from "./components/chooser/chooser";
import { SourceKind } from "./components/convert/convert";
import { MultiSelectFormItem } from "./components/pulumi-multi-select-form/pulumi-multi-select-form";
export namespace Components {
    interface PulumiAudio {
        "pausedText": string;
        "playingText": string;
        "url": string;
    }
    interface PulumiBanner {
        "dismissible": boolean;
        "name": string;
        "visible": boolean;
    }
    interface PulumiChoosable {
        "mode": ChooserMode;
        "selection": ChooserKey;
        "type": ChooserType;
        "value": ChooserKey;
        "values": ChooserKey;
    }
    interface PulumiChooser {
        "mode": ChooserMode;
        "optionStyle": ChooserOptionStyle;
        "options": string;
        "selection": ChooserKey;
        "type": ChooserType;
    }
    interface PulumiContactUsForm {
        "items": string;
        "labelClass"?: string;
        "selectClass"?: string;
    }
    interface PulumiConvert {
        "endpoint": string;
        "examples": string;
        "from": SourceKind;
        "theme": string;
    }
    interface PulumiDateCountdown {
        "countdownOverText": string;
        "dateString": string;
        "textClass": string;
        "valueLabelClass": string;
    }
    interface PulumiDatetime {
        "class"?: string;
        "date": string;
    }
    interface PulumiExample {
    }
    interface PulumiExamples {
    }
    interface PulumiFilterSelect {
        "reset": () => Promise<any>;
    }
    interface PulumiFilterSelectOption {
        "selected": boolean;
        "value": string;
    }
    interface PulumiFilterSelectOptionGroup {
        "close": () => Promise<any>;
        "expanded": boolean;
        "name": string;
    }
    interface PulumiGreenhouseJobsList {
    }
    interface PulumiHubspotForm {
        "class"?: string;
        "formId": string;
        "goToWebinarKey"?: string;
    }
    interface PulumiInstall {
        "os"?: OSKey;
    }
    interface PulumiMultiSelectForm {
        "defaultFormId": string;
        "items": MultiSelectFormItem[];
        "labelClass"?: string;
        "labelText": string;
        "selectClass"?: string;
    }
    interface PulumiRoot {
    }
    interface PulumiSlotMachine {
        "centerImages": string;
        "leftImages": string;
        "rightImages": string;
    }
    interface PulumiSwipeable {
    }
    interface PulumiSwiper {
        "autoplay": boolean;
        "autoplayDelay": number;
        "centeredSlides": boolean;
        "direction": "vertical" | "horizontal";
        "enableMouseEvents": boolean;
        "initialSlide": number;
        "loop": boolean;
        "navControls": boolean;
        "slides": number;
        "spaceBetween": number;
        "speed": number;
        "startSwiper": () => Promise<void>;
        "stopSwiper": () => Promise<void>;
    }
    interface PulumiTooltip {
        "hide": () => Promise<void>;
        "show": () => Promise<void>;
    }
    interface PulumiTopButton {
    }
    interface PulumiWebinarFormSelect {
        "labelClass"?: string;
        "selectClass"?: string;
        "sessions": string;
    }
}
declare global {
    interface HTMLPulumiAudioElement extends Components.PulumiAudio, HTMLStencilElement {
    }
    var HTMLPulumiAudioElement: {
        prototype: HTMLPulumiAudioElement;
        new (): HTMLPulumiAudioElement;
    };
    interface HTMLPulumiBannerElement extends Components.PulumiBanner, HTMLStencilElement {
    }
    var HTMLPulumiBannerElement: {
        prototype: HTMLPulumiBannerElement;
        new (): HTMLPulumiBannerElement;
    };
    interface HTMLPulumiChoosableElement extends Components.PulumiChoosable, HTMLStencilElement {
    }
    var HTMLPulumiChoosableElement: {
        prototype: HTMLPulumiChoosableElement;
        new (): HTMLPulumiChoosableElement;
    };
    interface HTMLPulumiChooserElement extends Components.PulumiChooser, HTMLStencilElement {
    }
    var HTMLPulumiChooserElement: {
        prototype: HTMLPulumiChooserElement;
        new (): HTMLPulumiChooserElement;
    };
    interface HTMLPulumiContactUsFormElement extends Components.PulumiContactUsForm, HTMLStencilElement {
    }
    var HTMLPulumiContactUsFormElement: {
        prototype: HTMLPulumiContactUsFormElement;
        new (): HTMLPulumiContactUsFormElement;
    };
    interface HTMLPulumiConvertElement extends Components.PulumiConvert, HTMLStencilElement {
    }
    var HTMLPulumiConvertElement: {
        prototype: HTMLPulumiConvertElement;
        new (): HTMLPulumiConvertElement;
    };
    interface HTMLPulumiDateCountdownElement extends Components.PulumiDateCountdown, HTMLStencilElement {
    }
    var HTMLPulumiDateCountdownElement: {
        prototype: HTMLPulumiDateCountdownElement;
        new (): HTMLPulumiDateCountdownElement;
    };
    interface HTMLPulumiDatetimeElement extends Components.PulumiDatetime, HTMLStencilElement {
    }
    var HTMLPulumiDatetimeElement: {
        prototype: HTMLPulumiDatetimeElement;
        new (): HTMLPulumiDatetimeElement;
    };
    interface HTMLPulumiExampleElement extends Components.PulumiExample, HTMLStencilElement {
    }
    var HTMLPulumiExampleElement: {
        prototype: HTMLPulumiExampleElement;
        new (): HTMLPulumiExampleElement;
    };
    interface HTMLPulumiExamplesElement extends Components.PulumiExamples, HTMLStencilElement {
    }
    var HTMLPulumiExamplesElement: {
        prototype: HTMLPulumiExamplesElement;
        new (): HTMLPulumiExamplesElement;
    };
    interface HTMLPulumiFilterSelectElement extends Components.PulumiFilterSelect, HTMLStencilElement {
    }
    var HTMLPulumiFilterSelectElement: {
        prototype: HTMLPulumiFilterSelectElement;
        new (): HTMLPulumiFilterSelectElement;
    };
    interface HTMLPulumiFilterSelectOptionElement extends Components.PulumiFilterSelectOption, HTMLStencilElement {
    }
    var HTMLPulumiFilterSelectOptionElement: {
        prototype: HTMLPulumiFilterSelectOptionElement;
        new (): HTMLPulumiFilterSelectOptionElement;
    };
    interface HTMLPulumiFilterSelectOptionGroupElement extends Components.PulumiFilterSelectOptionGroup, HTMLStencilElement {
    }
    var HTMLPulumiFilterSelectOptionGroupElement: {
        prototype: HTMLPulumiFilterSelectOptionGroupElement;
        new (): HTMLPulumiFilterSelectOptionGroupElement;
    };
    interface HTMLPulumiGreenhouseJobsListElement extends Components.PulumiGreenhouseJobsList, HTMLStencilElement {
    }
    var HTMLPulumiGreenhouseJobsListElement: {
        prototype: HTMLPulumiGreenhouseJobsListElement;
        new (): HTMLPulumiGreenhouseJobsListElement;
    };
    interface HTMLPulumiHubspotFormElement extends Components.PulumiHubspotForm, HTMLStencilElement {
    }
    var HTMLPulumiHubspotFormElement: {
        prototype: HTMLPulumiHubspotFormElement;
        new (): HTMLPulumiHubspotFormElement;
    };
    interface HTMLPulumiInstallElement extends Components.PulumiInstall, HTMLStencilElement {
    }
    var HTMLPulumiInstallElement: {
        prototype: HTMLPulumiInstallElement;
        new (): HTMLPulumiInstallElement;
    };
    interface HTMLPulumiMultiSelectFormElement extends Components.PulumiMultiSelectForm, HTMLStencilElement {
    }
    var HTMLPulumiMultiSelectFormElement: {
        prototype: HTMLPulumiMultiSelectFormElement;
        new (): HTMLPulumiMultiSelectFormElement;
    };
    interface HTMLPulumiRootElement extends Components.PulumiRoot, HTMLStencilElement {
    }
    var HTMLPulumiRootElement: {
        prototype: HTMLPulumiRootElement;
        new (): HTMLPulumiRootElement;
    };
    interface HTMLPulumiSlotMachineElement extends Components.PulumiSlotMachine, HTMLStencilElement {
    }
    var HTMLPulumiSlotMachineElement: {
        prototype: HTMLPulumiSlotMachineElement;
        new (): HTMLPulumiSlotMachineElement;
    };
    interface HTMLPulumiSwipeableElement extends Components.PulumiSwipeable, HTMLStencilElement {
    }
    var HTMLPulumiSwipeableElement: {
        prototype: HTMLPulumiSwipeableElement;
        new (): HTMLPulumiSwipeableElement;
    };
    interface HTMLPulumiSwiperElement extends Components.PulumiSwiper, HTMLStencilElement {
    }
    var HTMLPulumiSwiperElement: {
        prototype: HTMLPulumiSwiperElement;
        new (): HTMLPulumiSwiperElement;
    };
    interface HTMLPulumiTooltipElement extends Components.PulumiTooltip, HTMLStencilElement {
    }
    var HTMLPulumiTooltipElement: {
        prototype: HTMLPulumiTooltipElement;
        new (): HTMLPulumiTooltipElement;
    };
    interface HTMLPulumiTopButtonElement extends Components.PulumiTopButton, HTMLStencilElement {
    }
    var HTMLPulumiTopButtonElement: {
        prototype: HTMLPulumiTopButtonElement;
        new (): HTMLPulumiTopButtonElement;
    };
    interface HTMLPulumiWebinarFormSelectElement extends Components.PulumiWebinarFormSelect, HTMLStencilElement {
    }
    var HTMLPulumiWebinarFormSelectElement: {
        prototype: HTMLPulumiWebinarFormSelectElement;
        new (): HTMLPulumiWebinarFormSelectElement;
    };
    interface HTMLElementTagNameMap {
        "pulumi-audio": HTMLPulumiAudioElement;
        "pulumi-banner": HTMLPulumiBannerElement;
        "pulumi-choosable": HTMLPulumiChoosableElement;
        "pulumi-chooser": HTMLPulumiChooserElement;
        "pulumi-contact-us-form": HTMLPulumiContactUsFormElement;
        "pulumi-convert": HTMLPulumiConvertElement;
        "pulumi-date-countdown": HTMLPulumiDateCountdownElement;
        "pulumi-datetime": HTMLPulumiDatetimeElement;
        "pulumi-example": HTMLPulumiExampleElement;
        "pulumi-examples": HTMLPulumiExamplesElement;
        "pulumi-filter-select": HTMLPulumiFilterSelectElement;
        "pulumi-filter-select-option": HTMLPulumiFilterSelectOptionElement;
        "pulumi-filter-select-option-group": HTMLPulumiFilterSelectOptionGroupElement;
        "pulumi-greenhouse-jobs-list": HTMLPulumiGreenhouseJobsListElement;
        "pulumi-hubspot-form": HTMLPulumiHubspotFormElement;
        "pulumi-install": HTMLPulumiInstallElement;
        "pulumi-multi-select-form": HTMLPulumiMultiSelectFormElement;
        "pulumi-root": HTMLPulumiRootElement;
        "pulumi-slot-machine": HTMLPulumiSlotMachineElement;
        "pulumi-swipeable": HTMLPulumiSwipeableElement;
        "pulumi-swiper": HTMLPulumiSwiperElement;
        "pulumi-tooltip": HTMLPulumiTooltipElement;
        "pulumi-top-button": HTMLPulumiTopButtonElement;
        "pulumi-webinar-form-select": HTMLPulumiWebinarFormSelectElement;
    }
}
declare namespace LocalJSX {
    interface PulumiAudio {
        "pausedText"?: string;
        "playingText"?: string;
        "url"?: string;
    }
    interface PulumiBanner {
        "dismissible"?: boolean;
        "name"?: string;
        "visible"?: boolean;
    }
    interface PulumiChoosable {
        "mode"?: ChooserMode;
        "selection"?: ChooserKey;
        "type"?: ChooserType;
        "value"?: ChooserKey;
        "values"?: ChooserKey;
    }
    interface PulumiChooser {
        "mode"?: ChooserMode;
        "optionStyle"?: ChooserOptionStyle;
        "options"?: string;
        "selection"?: ChooserKey;
        "type"?: ChooserType;
    }
    interface PulumiContactUsForm {
        "items"?: string;
        "labelClass"?: string;
        "selectClass"?: string;
    }
    interface PulumiConvert {
        "endpoint"?: string;
        "examples"?: string;
        "from"?: SourceKind;
        "theme"?: string;
    }
    interface PulumiDateCountdown {
        "countdownOverText"?: string;
        "dateString"?: string;
        "textClass"?: string;
        "valueLabelClass"?: string;
    }
    interface PulumiDatetime {
        "class"?: string;
        "date"?: string;
    }
    interface PulumiExample {
    }
    interface PulumiExamples {
    }
    interface PulumiFilterSelect {
        "onFilterSelect"?: (event: CustomEvent<any[]>) => void;
    }
    interface PulumiFilterSelectOption {
        "onOptionChange"?: (event: CustomEvent<any>) => void;
        "selected"?: boolean;
        "value"?: string;
    }
    interface PulumiFilterSelectOptionGroup {
        "expanded"?: boolean;
        "name"?: string;
    }
    interface PulumiGreenhouseJobsList {
    }
    interface PulumiHubspotForm {
        "class"?: string;
        "formId"?: string;
        "goToWebinarKey"?: string;
    }
    interface PulumiInstall {
        "os"?: OSKey;
    }
    interface PulumiMultiSelectForm {
        "defaultFormId"?: string;
        "items"?: MultiSelectFormItem[];
        "labelClass"?: string;
        "labelText"?: string;
        "selectClass"?: string;
    }
    interface PulumiRoot {
        "onRendered"?: (event: CustomEvent<any>) => void;
    }
    interface PulumiSlotMachine {
        "centerImages"?: string;
        "leftImages"?: string;
        "rightImages"?: string;
    }
    interface PulumiSwipeable {
    }
    interface PulumiSwiper {
        "autoplay"?: boolean;
        "autoplayDelay"?: number;
        "centeredSlides"?: boolean;
        "direction"?: "vertical" | "horizontal";
        "enableMouseEvents"?: boolean;
        "initialSlide"?: number;
        "loop"?: boolean;
        "navControls"?: boolean;
        "slides"?: number;
        "spaceBetween"?: number;
        "speed"?: number;
    }
    interface PulumiTooltip {
    }
    interface PulumiTopButton {
    }
    interface PulumiWebinarFormSelect {
        "labelClass"?: string;
        "selectClass"?: string;
        "sessions"?: string;
    }
    interface IntrinsicElements {
        "pulumi-audio": PulumiAudio;
        "pulumi-banner": PulumiBanner;
        "pulumi-choosable": PulumiChoosable;
        "pulumi-chooser": PulumiChooser;
        "pulumi-contact-us-form": PulumiContactUsForm;
        "pulumi-convert": PulumiConvert;
        "pulumi-date-countdown": PulumiDateCountdown;
        "pulumi-datetime": PulumiDatetime;
        "pulumi-example": PulumiExample;
        "pulumi-examples": PulumiExamples;
        "pulumi-filter-select": PulumiFilterSelect;
        "pulumi-filter-select-option": PulumiFilterSelectOption;
        "pulumi-filter-select-option-group": PulumiFilterSelectOptionGroup;
        "pulumi-greenhouse-jobs-list": PulumiGreenhouseJobsList;
        "pulumi-hubspot-form": PulumiHubspotForm;
        "pulumi-install": PulumiInstall;
        "pulumi-multi-select-form": PulumiMultiSelectForm;
        "pulumi-root": PulumiRoot;
        "pulumi-slot-machine": PulumiSlotMachine;
        "pulumi-swipeable": PulumiSwipeable;
        "pulumi-swiper": PulumiSwiper;
        "pulumi-tooltip": PulumiTooltip;
        "pulumi-top-button": PulumiTopButton;
        "pulumi-webinar-form-select": PulumiWebinarFormSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pulumi-audio": LocalJSX.PulumiAudio & JSXBase.HTMLAttributes<HTMLPulumiAudioElement>;
            "pulumi-banner": LocalJSX.PulumiBanner & JSXBase.HTMLAttributes<HTMLPulumiBannerElement>;
            "pulumi-choosable": LocalJSX.PulumiChoosable & JSXBase.HTMLAttributes<HTMLPulumiChoosableElement>;
            "pulumi-chooser": LocalJSX.PulumiChooser & JSXBase.HTMLAttributes<HTMLPulumiChooserElement>;
            "pulumi-contact-us-form": LocalJSX.PulumiContactUsForm & JSXBase.HTMLAttributes<HTMLPulumiContactUsFormElement>;
            "pulumi-convert": LocalJSX.PulumiConvert & JSXBase.HTMLAttributes<HTMLPulumiConvertElement>;
            "pulumi-date-countdown": LocalJSX.PulumiDateCountdown & JSXBase.HTMLAttributes<HTMLPulumiDateCountdownElement>;
            "pulumi-datetime": LocalJSX.PulumiDatetime & JSXBase.HTMLAttributes<HTMLPulumiDatetimeElement>;
            "pulumi-example": LocalJSX.PulumiExample & JSXBase.HTMLAttributes<HTMLPulumiExampleElement>;
            "pulumi-examples": LocalJSX.PulumiExamples & JSXBase.HTMLAttributes<HTMLPulumiExamplesElement>;
            "pulumi-filter-select": LocalJSX.PulumiFilterSelect & JSXBase.HTMLAttributes<HTMLPulumiFilterSelectElement>;
            "pulumi-filter-select-option": LocalJSX.PulumiFilterSelectOption & JSXBase.HTMLAttributes<HTMLPulumiFilterSelectOptionElement>;
            "pulumi-filter-select-option-group": LocalJSX.PulumiFilterSelectOptionGroup & JSXBase.HTMLAttributes<HTMLPulumiFilterSelectOptionGroupElement>;
            "pulumi-greenhouse-jobs-list": LocalJSX.PulumiGreenhouseJobsList & JSXBase.HTMLAttributes<HTMLPulumiGreenhouseJobsListElement>;
            "pulumi-hubspot-form": LocalJSX.PulumiHubspotForm & JSXBase.HTMLAttributes<HTMLPulumiHubspotFormElement>;
            "pulumi-install": LocalJSX.PulumiInstall & JSXBase.HTMLAttributes<HTMLPulumiInstallElement>;
            "pulumi-multi-select-form": LocalJSX.PulumiMultiSelectForm & JSXBase.HTMLAttributes<HTMLPulumiMultiSelectFormElement>;
            "pulumi-root": LocalJSX.PulumiRoot & JSXBase.HTMLAttributes<HTMLPulumiRootElement>;
            "pulumi-slot-machine": LocalJSX.PulumiSlotMachine & JSXBase.HTMLAttributes<HTMLPulumiSlotMachineElement>;
            "pulumi-swipeable": LocalJSX.PulumiSwipeable & JSXBase.HTMLAttributes<HTMLPulumiSwipeableElement>;
            "pulumi-swiper": LocalJSX.PulumiSwiper & JSXBase.HTMLAttributes<HTMLPulumiSwiperElement>;
            "pulumi-tooltip": LocalJSX.PulumiTooltip & JSXBase.HTMLAttributes<HTMLPulumiTooltipElement>;
            "pulumi-top-button": LocalJSX.PulumiTopButton & JSXBase.HTMLAttributes<HTMLPulumiTopButtonElement>;
            "pulumi-webinar-form-select": LocalJSX.PulumiWebinarFormSelect & JSXBase.HTMLAttributes<HTMLPulumiWebinarFormSelectElement>;
        }
    }
}
