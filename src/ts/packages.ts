$(".section-registry").on("filterSelect", (event) => {
    const detail: unknown = event.detail;
    const filters = detail as any[];

    const packages = $(".resource-providers, .featured-providers").find(".package");

    if (filters.length > 0) {
        $(packages).addClass("hidden");

        $(packages).each((i, package) => {
            const el = $(package).find(".r-tile");

            const packageType = el.attr("data-component") === "true" ? "component" : "provider";
            const packageIsNative = packageType === "provider" && el.attr("data-native") === "true";
            const packageCategory = el.attr("data-category");
            const packageStatus = el.attr("data-status");

            const packageHasSelectedType = !!filters.find(f => f.group === "type" && f.value === packageType);
            const packageHasSelectedCategory = !!filters.find(f => f.group === "category" && f.value === packageCategory);
            const packageHasSelectedStatus = !!filters.find(f => f.group === "status" && f.value === packageStatus);

            // Show the package if it matches *any* filter, period. I suspect this logic may not be what we want, though;
            // Instead, we may want to apply inclusivity within a group, but exclusivity without -- for example, to allow
            // you to filter for packages that are providers *and* generally available *and either* monitoring
            // *or* network related. But for now, if it matches anything, we show it.
            if (packageHasSelectedType || packageHasSelectedCategory || packageHasSelectedStatus) {
                $(package).removeClass("hidden");
            }
        });
    } else {
        $(packages).removeClass("hidden");
    }
});
