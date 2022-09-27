import { Component, Host, Prop, State, h } from "@stencil/core";

type apps = { [ app: string ]: string };
type cloudApps = { [cloud: string]: apps };
type languageCloudApps = { [language: string]: cloudApps };

@Component({
    tag: "slot-machine-result",
    styleUrl: "slot-machine-result.scss",
    shadow: false,
})
export class SlotMachineResult {

    // order is a pre-shuffled list of column combinations. Each subsequent item does not repeat any of the columns.
    // Note: this ordering was computed using the `slots.lp` A-Prolog program. See that file for further details.
    private order: string[] = [
        "typescript,kubernetes,nginx",
        "python,aws,eks",
        "go,kubernetes,helm",
        "yaml,aws,eks",
        "csharp,kubernetes,nginx",
        "java,aws,eks",
        "yaml,kubernetes,nginx",
        "csharp,aws,eks",
        "python,kubernetes,helm",
        "typescript,gcp,gke",
        "go,aws,eks",
        "csharp,gcp,gke",
        "typescript,kubernetes,helm",
        "go,azure,aks",
        "yaml,gcp,gke",
        "typescript,aws,eks",
        "python,kubernetes,nginx",
        "yaml,azure,aks",
        "java,gcp,gke",
        "csharp,azure,aks",
        "go,gcp,gke",
        "typescript,azure,aks",
        "python,gcp,gke",
        "go,kubernetes,nginx",
        "java,azure,aks",
        "csharp,kubernetes,helm",
        "python,azure,aks",
        "java,kubernetes,nginx",
    ];

    private counter: number = 0;

    private languages: string[] = [
        "csharp",
        "go",
        "java",
        "python",
        "typescript",
        "yaml",
    ];

    private clouds: string[] = [
        "aws",
        "azure",
        "gcp",
        "kubernetes",
    ];

    private apps: string[] = [
        "aks",
        "eks",
        "gke",
        "helm",
        "nginx",
    ];

    private todoImage: string = "/images/slot-machine/code/todo.svg";

    private descriptionLookup: { [k: string]: string } = {
        "csharp": "C#",
        "go": "Go",
        "java": "Java",
        "python": "Python",
        "typescript": "TypeScript",
        "yaml": "YAML",
        "aws": "AWS",
        "azure": "Azure",
        "gcp": "Google Cloud",
        "kubernetes": "Kubernetes",
        "aks": "AKS Cluster",
        "eks": "EKS Cluster",
        "gke": "GKE Cluster",
        "helm": "Helm Chart",
        "nginx": "Nginx Deployment",
    };

    private codeDescription(language: string, cloud: string, app: string): string {
        return `${this.descriptionLookup[language]} + ${this.descriptionLookup[cloud]} + ${this.descriptionLookup[app]}`;
    }

    private codeLookup: languageCloudApps = {
        csharp: {
            aws: {
                eks: "/images/slot-machine/code/csharp-aws-eks.svg",
            },
            azure: {
                aks: this.todoImage,
            },
            gcp: {
                gke: this.todoImage,
            },
            kubernetes: {
                helm: "/images/slot-machine/code/csharp-kubernetes-helm.svg",
                nginx: "/images/slot-machine/code/csharp-kubernetes-nginx.svg",
            },
        },
        go: {
            aws: {
                eks: "/images/slot-machine/code/go-aws-eks.svg",
            },
            azure: {
                aks: this.todoImage,
            },
            gcp: {
                gke: this.todoImage,
            },
            kubernetes: {
                helm: "/images/slot-machine/code/go-kubernetes-helm.svg",
                nginx: "/images/slot-machine/code/go-kubernetes-nginx.svg",
            },
        },
        java: {
            aws: {
                eks: "/images/slot-machine/code/java-aws-eks.svg",
            },
            azure: {
                aks: this.todoImage,
            },
            gcp: {
                gke: this.todoImage,
            },
            kubernetes: {
                nginx: this.todoImage,
            },
        },
        python: {
            aws: {
                eks: "/images/slot-machine/code/python-aws-eks.svg",
            },
            azure: {
                aks: this.todoImage
            },
            gcp: {
                gke: this.todoImage,
            },
            kubernetes: {
                helm: "/images/slot-machine/code/python-kubernetes-helm.svg",
                nginx: "/images/slot-machine/code/python-kubernetes-nginx.svg",
            },
        },
        typescript: {
            aws: {
                eks: "/images/slot-machine/code/typescript-aws-eks.svg",
            },
            azure: {
                aks: this.todoImage,
            },
            gcp: {
                gke: this.todoImage,
            },
            kubernetes: {
                helm: "/images/slot-machine/code/typescript-kubernetes-helm.svg",
                nginx: "/images/slot-machine/code/typescript-kubernetes-nginx.svg",
            },
        },
        yaml: {
            aws: {
                eks: "/images/slot-machine/code/yaml-aws-eks.svg",
            },
            azure: {
                aks: this.todoImage,
            },
            gcp: {
                gke: this.todoImage,
            },
            kubernetes: {
                nginx: "/images/slot-machine/code/yaml-kubernetes-nginx.svg",
            },
        },
    };

    @Prop()
    imageClass: string = "";

    @State()
    columnLeftOptions: string[] = this.languages;

    @State()
    columnLeftRotator: NodeJS.Timeout;

    @State()
    columnMiddleOptions: string[] = this.clouds;

    @State()
    columnMiddleRotator: NodeJS.Timeout;

    @State()
    columnRightOptions: string[] = this.apps;

    @State()
    columnRightRotator: NodeJS.Timeout;

    @State()
    activeLanguage: string = "csharp";

    @State()
    activeCloud: string = "kubernetes";

    @State()
    activeApp: string = "nginx";

    @State()
    activeCode: string = "/images/slot-machine/code/csharp-kubernetes-nginx.svg";

    @State()
    activeDescription: string = this.codeDescription(this.activeLanguage, this.activeCloud, this.activeApp);

    @State()
    selectedLangugage: string = "";

    @State()
    selectedCloud: string = "";

    @State()
    selectedApp: string = "";

    @State()
    selectedCode: string = "/images/slot-machine/code/csharp-aws-eks.svg";

    componentDidLoad() {
        this.startRotators();
    }

    private codeForSelection(): string {
        const clouds = this.codeLookup[this.selectedLangugage];
        const apps = clouds ? clouds[this.selectedCloud] : undefined;
        const code = apps ? apps[this.selectedApp] : undefined;
        if (code === undefined) {
            return "/images/slot-machine/code/csharp-aws-eks.svg";
        }
        return code;
    }

    // setNextSelection iterates through the shuffled list and sets the selected variables to the chosen combination.
    private setNextSelection() {
        const idx = (this.counter % this.order.length);
        this.counter++;
        const selected = this.order[idx];
        console.log(`selected: ${selected}`);

        const parts = selected.split(",");
        this.selectedLangugage = parts[0];
        this.selectedCloud = parts[1];
        this.selectedApp = parts[2];
        this.selectedCode = this.codeForSelection();
    }

    // rotateIntervalMilliseconds sets the delay between rotations in a column.
    rotateIntervalMilliseconds = 400;

    // startRotators begins spinning the columns through all the available options, from left to right with a delay
    // between each start. The next combination is chosen at the start of this process, and will be set during an
    // additional rotation after the stop timeout fires.
    private startRotators() {
        this.setNextSelection();

        // Immediately start left column.
        this.columnLeftRotator = setInterval(() => this.incrementColumnLeft(), this.rotateIntervalMilliseconds);

        // Middle column starts after 500 ms delay.
        setTimeout(() => {
            this.columnMiddleRotator = setInterval(() => this.incrementColumnMiddle(), this.rotateIntervalMilliseconds);
        }, 500);

        // Right column starts after 1000 ms delay.
        setTimeout(() => {
            this.columnRightRotator = setInterval(() => this.incrementColumnRight(), this.rotateIntervalMilliseconds);
        }, 1000);

        // Stop all rotation after 3000 ms.
        setTimeout(() => this.stopRotators(), 3000);
    }

    // stopRotators stops the column on the previously selected combination from left to right with a delay between
    // each column stop.
    private stopRotators() {
        // Set left column to selected item.
        this.incrementColumnLeft(this.selectedLangugage);

        // Set middle column to selected item after 500 ms.
        setTimeout(() => this.incrementColumnMiddle(this.selectedCloud), 500);

        // Set right column to selected item after 1000 ms.
        setTimeout(() => this.incrementColumnRight(this.selectedApp), 1000);

        // Hold a stop for 10 seconds.
        setTimeout(() => this.startRotators(), 10000);
    }

    // incrementColumnLeft picks the next item in the column by default, or sets the value to the specified override.
    private incrementColumnLeft(override?: string) {
        if (override) {
            clearInterval(this.columnLeftRotator);
            this.columnLeftRotator = setTimeout(() => {this.activeLanguage = override}, this.rotateIntervalMilliseconds);
        } else {
            this.columnLeftOptions = this.rotateList(this.columnLeftOptions);
            this.activeLanguage = this.columnLeftOptions[0];
        }
    }

    // incrementColumnMiddle picks the next item in the column by default, or sets the value to the specified override.
    private incrementColumnMiddle(override?: string) {
        if (override) {
            clearInterval(this.columnMiddleRotator);
            this.columnMiddleRotator = setTimeout(() => {this.activeCloud = override}, this.rotateIntervalMilliseconds);
        } else {
            this.columnMiddleOptions = this.rotateList(this.columnMiddleOptions);
            this.activeCloud = this.columnMiddleOptions[0];
        }
    }

    // incrementColumnRight picks the next item in the column by default, or sets the value to the specified override.
    private incrementColumnRight(override?: string) {
        if (override) {
            clearInterval(this.columnRightRotator);
            this.columnRightRotator = setTimeout(() => {
                this.activeApp = override;

                // Wait 400 ms and then update the description and code.
                setTimeout(() => {
                    this.setDescription();
                    this.setCode();
                }, 400);
            }, this.rotateIntervalMilliseconds);
        } else {
            this.columnRightOptions = this.rotateList(this.columnRightOptions);
            this.activeApp = this.columnRightOptions[0];
        }
    }

    private setDescription() {
        this.activeDescription = this.codeDescription(this.activeLanguage, this.activeCloud, this.activeApp);
    }

    private setCode() {
        this.activeCode = this.selectedCode;
    }

    // rotateList moves the first element to the end of the list.
    private rotateList(items: string[]): string[] {
        const newItems = [...items];
        const oldFirst = newItems.shift();
        newItems.push(oldFirst);
        return newItems;
    }

    render() {
        const logoLeft = `/images/slot-machine/language/${this.activeLanguage}.svg`;
        let logoMiddle = `/images/slot-machine/cloud/${this.activeCloud}.svg`;
        let logoRight = `/images/slot-machine/app/${this.activeApp}.svg`;
        const code = this.activeCode;

        return (
            <Host>
                <div>
                    <div class="slot-container">
                        <div class="row">
                            <div class="margin-container"></div>

                            <div class="logo-container">
                                <img key={logoLeft} class={this.imageClass} src={logoLeft} />
                            </div>

                            <div class="separator-container"><b>+</b></div>

                            <div class="logo-container">
                                <img key={logoMiddle} class={this.imageClass} src={logoMiddle} />
                            </div>

                            <div class="separator-container"><b>+</b></div>

                            <div class="logo-container">
                                <img key={logoRight} class={this.imageClass} src={logoRight} />
                            </div>

                            <div class="margin-container"></div>
                        </div>
                        <div class="description">{this.activeDescription}</div>
                        <div class="code-row">
                            <div class="code-container">
                                <img key={this.activeDescription} class={this.imageClass} src={code} />
                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

}
