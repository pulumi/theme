import { Host, Component, Prop, State, h } from "@stencil/core";

@Component({
    tag: "event-session-registration-modal",
    styleUrl: "event-session-registration-modal.scss",
    shadow: false,
})
export class EventSessionRegistrationModal {
    @Prop()
    buttonClass: string;

    @Prop()
    buttonText: string;

    @Prop()
    modalTitle: string;

    @State()
    isModalOpen: boolean = false;

    private handleButtonClick = (e: Event) => {
        e.preventDefault();
        this.isModalOpen = true;
        document.querySelector("body").className += " disable-scroll";
    }

    private handleCloseModal = (e: Event) => {
        e.preventDefault();
        this.isModalOpen = false;
        console.log(document.querySelector("body").className);
        document.querySelector("body").className = document.querySelector("body").className.replace("disable-scroll", "");
    }

    private renderModal() {
        console.log("rendering modal")
        return(
            <div class="event-session-modal-container">
                <div class="modal-container">
                    <div class="modal">
                        <div class="title-container">
                            <div class="title-text">
                                <h2>{ this.modalTitle }</h2>
                            </div>

                            <div class="close-icon">
                                <i class="fa fa-times" onClick={this.handleCloseModal}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        console.log("component is rendering", this.isModalOpen);

        return (
            <Host>
                <div>
                    <div>
                        <a class={this.buttonClass} href="#" onClick={this.handleButtonClick}>{ this.buttonText }</a>
                    </div>

                    { this.isModalOpen ? this.renderModal() : null }
                </div>
            </Host>
        );
    }

}
