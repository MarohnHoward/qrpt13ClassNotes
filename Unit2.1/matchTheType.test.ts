/*
! strings are any value held within quotation marks ""
* meaning that "this is a string"
* "3710923718423" --> even though it has numbers is a string because of the ""
* "true" --> also a string because of the ""
* strings can becontained in double quotes "" or single quotes '' 
* you can use either but you cannot use the same type of quote twice in the same statement 
* so if you do ("blah = ["blah blah "]") this will error 
* but ("blah = ['blah blah']") will work
 */
describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("Puppies")).toBeTruthy();
      expect(stringCheck("This is a sentence")).toBeTruthy();
      expect(stringCheck(19485320984)).toBeFalsy();
    });
    
    // !numbers are numbers or equations that we can set to variables

    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(3.14)).toBeTruthy();
      expect(numberCheck(3*5)).toBeTruthy();
      expect(numberCheck('12')).toBeFalsy();
    });
    //!booleans are true or false statments or just true or false
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(5 < 10)).toBeTruthy();
      expect(booleanCheck(false)).toBeTruthy();
      expect(booleanCheck(10)).toBeFalsy();
    });
  });
  
  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }