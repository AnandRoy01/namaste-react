import { sum } from "../sum";

test("sum function should calculte the sum of params", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
