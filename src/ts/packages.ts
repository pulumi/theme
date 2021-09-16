$(".section-registry").on("filterSelect", (event) => {
    const detail: unknown = event.detail;
    const filters = detail as any[];

    const packages = $(".all-packages, .featured-packages").find(".package");

    const noSelectedType = filters.find(f => f.group === "type") === undefined;
    const noSelectedCategory = filters.find(f => f.group === "category") === undefined;
    const noSelectedStatus = filters.find(f => f.group === "status") === undefined;

    if (filters.length > 0) {
        $(packages).addClass("hidden");

        $(packages).each((i, package) => {
            const el = $(package).find("[data-category]");

            const packageType = el.attr("data-component") === "true" ? "component" : "provider";
            const packageCategory = el.attr("data-category");
            const packageStatus = el.attr("data-status");
            const packageIsNative = packageType === "provider" && el.attr("data-native") === "true";

            const packageHasSelectedType = !!(filters.find(f => f.group === "type" && f.value === packageType)) || (filters.find(f => f.group === "type" && f.value === "native") && packageIsNative);
            const packageHasSelectedCategory = !!filters.find(f => f.group === "category" && f.value === packageCategory);
            const packageHasSelectedStatus = !!filters.find(f => f.group === "status" && f.value === packageStatus);

            /**
                Show the package if it matches any of the selected filters. For example:

                * If type Component and type Provider are selected, show packages that are
                  tagged as either "component" OR "provider", since those two filters belong
                  to the same option group.

                * If type Component and use-case Cloud are selected, show packages that
                  are tagged as both "component" AND "cloud", since those two filters
                  belong to different options groups.

                * If nothing is selected from a given group, assume the intent is to see
                  everything in that group (so don't apply any of the filters within it).
             */
            if ((packageHasSelectedType || noSelectedType) &&
                (packageHasSelectedCategory || noSelectedCategory) &&
                (packageHasSelectedStatus || noSelectedStatus)) {

                $(package).removeClass("hidden");
            }
        });
    } else {
        $(packages).removeClass("hidden");
    }

    // Apply selections on the DOM, so cards and tags can use them as well.
    $(".packages")
        .attr("data-selected-types", filters.filter(f => f.group === "type").map(t => t.value).join(","))
        .attr("data-selected-categories", filters.filter(f => f.group === "category").map(t => t.value).join(","))
        .attr("data-selected-statuses", filters.filter(f => f.group === "status").map(t => t.value).join(","));
});

$(".section-registry .no-results .reset").on("click", (event) => {
    event.stopPropagation();
    const fs = $("pulumi-filter-select").get(0) as any;
    fs.reset();
});
