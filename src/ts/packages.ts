$(".section-registry").on("filterSelect", (event) => {
    const detail: unknown = event.detail;
    const filters = detail as any[];

    const packages = $(".all-packages, .featured-packages").find(".package");

    const noSelectedType = filters.find(f => f.group === "type") === undefined;
    const noSelectedCategory = filters.find(f => f.group === "category") === undefined;

    if (filters.length > 0) {
        $(packages).addClass("hidden");

        $(packages).each((i, package) => {
            const el = $(package).find("[data-category]");

            const packageType = el.attr("data-component") === "true" ? "component" : "provider";
            const packageCategory = el.attr("data-category");
            const packageIsNative = packageType === "provider" && el.attr("data-native") === "true";

            const packageHasSelectedType = !!(filters.find(f => f.group === "type" && f.value === packageType)) || (filters.find(f => f.group === "type" && f.value === "native") && packageIsNative);
            const packageHasSelectedCategory = !!filters.find(f => f.group === "category" && f.value === packageCategory);

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
                (packageHasSelectedCategory || noSelectedCategory)) {

                $(package).removeClass("hidden");
            }
        });
    } else {
        $(packages).removeClass("hidden");
    }

    // Apply selections on the DOM, so cards and tags can use them as well.
    $(".packages")
        .attr("data-selected-types", filters.filter(f => f.group === "type").map(t => t.value).join(","))
        .attr("data-selected-categories", filters.filter(f => f.group === "category").map(t => t.value).join(","));

    // Update the count-badge values.
    const featuredCount = $(".featured-packages .package:not(.hidden)").length;
    const allCount = $(".all-packages .package:not(.hidden)").length;
    $(".featured-count").text(featuredCount);
    $(".all-count").text(allCount);

    // If there isn't anything to show in Featured, just hide that section entirely.
    $(".featured-packages").toggleClass("hidden", featuredCount === 0);

    // Close the menu.
    $("pulumi-filter-select-option-group").each((i, el: any) => el.close());
});

$(".section-registry .no-results .reset").on("click", (event) => {
    event.stopPropagation();
    const fs = $("pulumi-filter-select").get(0) as any;
    fs.reset();
});
