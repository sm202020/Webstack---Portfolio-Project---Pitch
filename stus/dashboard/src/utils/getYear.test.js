import { getYear } from "./getYear";

describe("To test the getYear function", () => {
    it("should return the present year", () => {
        const presentYear = new Date().getFullYear();
        expect(presentYear).toEqual(getYear());
    })
})