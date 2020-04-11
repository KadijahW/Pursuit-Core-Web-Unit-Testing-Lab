const {
    isOdd,
    numberOfDigits,
    disemvowel,
    secondSmallest,
    getLocations,
    onlyOddStrings,
    linkedListToArray,
} = require("./labFunctions");

describe(" Odd Numbers", () => {
    test("find odd numbers", () => {
        expect(isOdd(3)).toBe(true)
        expect(isOdd("3")).not.toBeFalsy()
        expect(isOdd(2)).toBe(false)
    })
})

describe("find the length", () => {
    test("find the length of digits in a number", () => {
        input = 1
        input1 = 134
        input2 = 6789085

        expect(numberOfDigits(input)).toEqual(1)
        expect(numberOfDigits(input1)).toEqual(3)
        expect(numberOfDigits(input2)).toEqual(7)
    })
})

describe("find all the vowels in the string", () => {
    test("disemvowel", () => {
        expect(disemvowel("hello")).toBe("hll")
        expect(disemvowel("aaaee")).toBe("")
    })
})

describe("find the second smallest number", () => {
    test("second smallest number", () => {
        expect(secondSmallest([1, 4, 7])).toEqual(4)
        expect(secondSmallest([-1, 1, 2])).toEqual(1)
    })
})

describe("find location", () => {
    test("find the corresponding location", () => {
        expect(getLocations([{
            location: "Algeria",
            population: 41
        }, {
            location: "Belize",
            population: 0.4
        }, {
            location: "China",
            population: 1386
        }, {
            location: "Denmark",
            population: 6
        }])).toBeDefined()
        expect(getLocations([])).toBeDefined()
    })
})

describe("find the string with odd length of character", () => {
    test("find the string with odd length char",() => {
        expect(onlyOddStrings(["Good", "Morning", "World", "bye"])).toBeDefined()
        expect(onlyOddStrings(["", "ago"])).toBeDefined()
        expect(onlyOddStrings([],[])).toBeDefined()

    })
})

