$(".section-registry").on("filterSelect", (event) => {
    const detail: unknown = event.detail;
    const filters = detail as any[];

    const packages = $(".resource-providers, .featured-providers").find(".package");

    const noSelectedType = filters.find(f => f.group === "type") === undefined;
    const noSelectedCategory = filters.find(f => f.group === "category") === undefined;
    const noSelectedStatus = filters.find(f => f.group === "status") === undefined;

    if (filters.length > 0) {
        $(packages).addClass("hidden");

        $(packages).each((i, package) => {
            const el = $(package).find(".r-tile");

            const packageType = el.attr("data-component") === "true" ? "component" : "provider";
            const packageCategory = el.attr("data-category");
            const packageStatus = el.attr("data-status");
            const packageIsNative = packageType === "provider" && el.attr("data-native") === "true";

            const packageHasSelectedType = !!(filters.find(f => f.group === "type" && f.value === packageType)) || (filters.find(f => f.group === "type" && f.value === "native") && packageIsNative);
            const packageHasSelectedCategory = !!filters.find(f => f.group === "category" && f.value === packageCategory);
            const packageHasSelectedStatus = !!filters.find(f => f.group === "status" && f.value === packageStatus);

            // Show the package if it matches any filter.
            if ((packageHasSelectedType || noSelectedType) &&
                (packageHasSelectedCategory || noSelectedCategory) &&
                (packageHasSelectedStatus || noSelectedStatus)) {

                $(package).removeClass("hidden");
            }
        });
    } else {
        $(packages).removeClass("hidden");
    }
});

$(".section-registry .no-results .reset").on("click", (event) => {
    event.stopImmediatePropagation();
    const fs = $("pulumi-filter-select").get(0) as any;
    fs.reset();
});
