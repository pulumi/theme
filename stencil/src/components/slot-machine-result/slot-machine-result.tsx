import { Component, Host, Prop, State, h } from "@stencil/core";

@Component({
    tag: "slot-machine-result",
    styleUrl: "slot-machine-result.scss",
    shadow: false,
})
export class SlotMachineResult {
    @Prop()
    leftItems: string = "";

    @Prop()
    centerItems: string = "";

    @Prop()
    rightItems: string = "";

    @Prop()
    imageClass: string = "";

    @State()
    columnOne: string[] = [];

    @State()
    columnOneRotator: NodeJS.Timeout;

    @State()
    columnTwo: string[] = [];

    @State()
    columnTwoRotator: NodeJS.Timeout;

    @State()
    columnThree: string[] = [];

    @State()
    columnThreeRotator: NodeJS.Timeout;

    @State()
    resultKey = ""

    componentDidLoad() {
        this.columnOne = this.leftItems.split(",");
        this.columnTwo = this.centerItems.split(",");
        this.columnThree = this.rightItems.split(",");
        this.startRotators();
    }

    private cleanColumnKey(key: string): string {
        const keyParts = key.split("/");
        return keyParts[keyParts.length - 1].split(".")[0];
    }

    private setResultKey() {
        this.resultKey = [
            this.cleanColumnKey(this.columnOne[0]),
            this.cleanColumnKey(this.columnTwo[0]),
            this.cleanColumnKey(this.columnThree[0])
        ].join("-");
    }

    private startRotators() {
        this.resultKey = "";
        this.columnOneRotator = setInterval(() => this.incrementColumnOne(), 400);

        setTimeout(() => {
            this.columnTwoRotator = setInterval(() => this.incrementColumnTwo(), 400);
        }, 500);

        setTimeout(() => {
            this.columnThreeRotator = setInterval(() => this.incrementColumnThree(), 400);
        }, 1000);

        setTimeout(() => this.stopRotators(), 3000);
    }

    private stopRotators() {
        clearInterval(this.columnOneRotator);
        setTimeout(() => clearInterval(this.columnTwoRotator), 500);
        setTimeout(() => {
            clearInterval(this.columnThreeRotator);
            this.setResultKey();
        }, 1000);

        setTimeout(() => this.startRotators(), 10000);
    }

    private incrementColumnOne() {
        this.columnOne = this.updateOrder(this.columnOne);
    }

    private incrementColumnTwo() {
        this.columnTwo = this.updateOrder(this.columnTwo);
    }

    private incrementColumnThree() {
        this.columnThree = this.updateOrder(this.columnThree);
    }

    private updateOrder(items: string[]): string[] {
        const newItems = [...items];
        const oldFirst = newItems.shift();
        newItems.push(oldFirst);
        return newItems;
    }

    render() {
        const itemOne = this.columnOne[0];
        const itemTwo = this.columnTwo[0];
        const itemThree = this.columnThree[0];
        return (
            <Host>
                <div>
                    <div class="slot-container">
                        <div class="item-container">
                            <img key={itemOne} class={this.imageClass} src={itemOne} />
                        </div>

                        <div class="separator-container">+</div>

                        <div class="item-container">
                            <img key={itemTwo} class={this.imageClass} src={itemTwo} />
                        </div>

                        <div class="separator-container">+</div>

                        <div class="item-container">
                            <img key={itemThree} class={this.imageClass} src={itemThree} />
                        </div>
                    </div>
                    <div>
                        <p>Result: {this.resultKey}</p>
                    </div>
                </div>
            </Host>
        );
    }

}
