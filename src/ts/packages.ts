$(".section-registry").on("filter", (event) => {
    const detail: unknown = event.detail;
    const filters = detail as any[];

    const packages = $(".resource-providers, .featured-providers").find(".package");

    if (filters.length > 0) {
        $(packages).addClass("hidden");

        $(packages).each((i, package) => {
            const el = $(package).find(".r-tile");

            const category = el.attr("data-category");
            const status = el.attr("data-status");

            let kind;
            const native = el.attr("data-native") === "true";
            if (native) {
                kind = "native";
            } else {
                kind = el.attr("data-component") === "true" ? "component" : "provider";
            }

            const hasKind = !!filters.find(f => f.kind === "type" && f.value === kind);
            const hasCategory = !!filters.find(f => f.kind === "category" && f.value === category);
            const hasStatus = !!filters.find(f => f.kind === "status" && f.value === status);

            if (hasKind || hasCategory || hasStatus) {
                $(package).removeClass("hidden");
            }
        });
    } else {
        $(packages).removeClass("hidden");
    }
});
