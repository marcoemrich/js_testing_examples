import { jest } from "@jest/globals";

const greet = (name) => print("Hello " + name);

global.print = jest.fn();

describe("Mock Example: greet", () => {
  beforeEach(() => {
    print.mockClear();
  });
  it("should print a greeting with Name", () => {
    greet("Alice");

    expect(print).toBeCalledWith("Hello Alice");
  });
  xit("don't forget to clear", () => {
    expect(print).toBeCalledWith("Hello Alice");
  });
});

greet(console.log.bind(console), "Steve");
