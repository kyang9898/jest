const assignment = require("../index");

describe("reverses the number", () => {
    test("reverseNumber()", () => {
        expect(assignment.reverseNumber(349210)).toBe(12943);
    });
    test("organizes the letters in alphabetical order()", () => {
        expect(assignment.organizeLetters("webmaster")).toBe("abeemrstw");
    });
    test("checks the prime number to be truthy or falsy()", () => {
        expect(assignment.primeNumber(5)).toBeTruthy();
        expect(assignment.primeNumber(8)).toBeFalsy();
    });
    test("counts the length of the string()", () => {
        expect(assignment.uniqueChar("thequickbrownfoxjumpsoverthelazydog")).toHaveLength(26);
    });
    test("gets the second numbers and sets the array to equal the 2 secondmost numbers()", () => {
        expect(assignment.second([0])).toBeUndefined();
        expect(assignment.second([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
    test("sorts the array to equal the output()", () => {
        const input = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
        const output = [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1];
        expect(assignment.sort(input)).toEqual(output);
    });
    test("calls and returns the parameters()", () => {
        const keng = jest.fn(() => true);
        assignment.callBack(keng);
        expect(keng).toHaveBeenCalled();
        expect(keng).toHaveReturned();
    });
});