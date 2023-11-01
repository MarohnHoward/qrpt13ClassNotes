import { describe, it } from "@jest/globals"
//!This line is telling our system that we are looking for describe and it from our jest packages. 
describe("testing math", () => { 
    //!Describe is like our test plan it holds all our cases for that project.
    it("should do some simple math", () => {
        //!it is like a test case it hold how we are testing our feature. 
        expect(10).toBeGreaterThan(5)
        expect(5).toBeLessThan(10)
        expect(5).toEqual(5)
        expect(5 === 5).toBeTruthy()
        //!using === is checking for type 
        //!Single equal is for setting something like a variable 
        //!Double is verifying 
    })
})