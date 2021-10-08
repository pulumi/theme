import { ApiSymbol } from "./api-symbol";

describe("pulumi-api-symbol", () => {
    it("builds", () => {
        expect(new ApiSymbol()).toBeTruthy();
    });
});
