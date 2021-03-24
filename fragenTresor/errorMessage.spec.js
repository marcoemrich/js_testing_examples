// https://github.com/facebook/jest/issues/3293

import assert from "assert";

test("equal mit error-message", () => {
  assert.strictEqual(1, 1, "one is not three");
  // assert.strictEqual(1, 3, "one is not three");
});
