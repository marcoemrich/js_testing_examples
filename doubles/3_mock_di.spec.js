import { jest } from "@jest/globals";

const print = (text) => console.log(text + "\n");

const greet = (name, printFn = print) => printFn("Hello " + name);

describe("Mock Example: greet", () => {
  it("should print a greeting with Name", () => {
    const printMock = jest.fn();
    greet("Alice", printMock);
    expect(printMock).toBeCalledWith("Hello Alice");
  });
});

// greet(console.log.bind(console), "Steve");
