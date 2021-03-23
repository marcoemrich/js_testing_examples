import { jest } from "@jest/globals";

class Person {
  read() {
    //fetch from API
  }

  fullName() {
    const personData = this.read();
    return personData.firstName + " " + personData.name;
  }
}

// let createPerson = (id) => {
//   const read = function (id) {
//     //fetch from API
//   };

//   return {
//     read: read,

//     fullName: function () {
//       const personData = this.read(id);
//       return personData.firstName + " " + personData.name;
//     },
//   };
// };

describe("Stub Example", () => {
  it("should return full name of Person from API", () => {
    const p = new Person();
    const spy = jest.spyOn(p, "read");

    spy.mockReturnValue({ name: "Wonder", firstName: "Alice" });

    p.fullName();

    // expect(spy).toHaveBeenCalledTimes(2)
    expect(p.fullName()).toEqual("Alice Wonder");
  });
});
