const uuid = require("uuid").v4;

const createPerson = (name) => ({
  name,
  id: uuid(),
});

test("Person has an id in the correct format", () => {
  const harry = createPerson("Harry");

  console.log(harry);

  expect(harry.id).toMatch(/^[0-9a-f-]{36}$/);
});
