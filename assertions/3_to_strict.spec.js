class Person {
  constructor(firstName, name, city) {
    this.name = name;
    this.firstName = firstName;
    this.city = city;
  }
  print() {
    // format is subject to change
    return `${this.name}, ${this.firstName.charAt(0)}. from ${this.city}`;
  }
}

test("dont", () => {
  const harry = new Person("Harry", "Potter", "Hogwarts");
  expect(harry.print()).toEqual("Potter, H. from Hogwarts");
});

describe("do", () => {
  test("print formats Name as expected", () => {
    const harry = new Person("Harry", "Potter", "Hogwarts");
    expect(harry.print()).toContain("Potter, H.");
  });
  test("print contains city", () => {
    const harry = new Person("Harry", "Potter", "Hogwarts");
    expect(harry.print()).toContain("from Hogwarts");
  });
});
