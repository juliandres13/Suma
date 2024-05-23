const suma = require("../../suma");

describe("Test about dummy function", () => {
    it("should return a + b number", () => {
        const result = suma(20, 30);
        expect(result).toBe(50);
        console.log(result);
    });
    
    it("should fail", () => {
        const numberA = 5;
        const numberB = 6;
        const result = suma(numberA, numberB);
        expect(result).not.toEqual(14);
        // console.log(result);
    })
})

// describe("A suite", function() {
//     it("contains spec with an expectation", function() {
//         expect(true).toBe(true);
//     });
// });