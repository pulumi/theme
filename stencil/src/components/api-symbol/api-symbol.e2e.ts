import { newE2EPage } from "@stencil/core/testing";

describe("pulumi-api-symbol", () => {
    it("renders", async () => {
        const page = await newE2EPage();
        await page.setContent("<pulumi-api-symbol></pulumi-api-symbol>");

        const element = await page.find("pulumi-api-symbol");
        expect(element).toHaveClass("hydrated");
    });
});
