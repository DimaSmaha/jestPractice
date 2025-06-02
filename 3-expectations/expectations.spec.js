describe("expectations", () => {
  test("Test To Be (Check Value, WONT work for objects)", () => {
    // Use .toBe for simple comparisons
    expect("Some String").toBe("Some String");
    expect(13).toBe(13);
    expect(1 + 2).toBe(3);
  });

  test("Test To Equal (Check Value, work for objects)", () => {
    // Use .toEqual when comparing complex types
    expect({ type: "array" }).toEqual({ type: "array" });
    expect([13]).toEqual([13]);
    expect([...[1, 2, 3]]).toEqual([1, 2, 3]);
  });

  test("Test Just Type and not a value", () => {
    // Use property Matchers if the final value is unknown
    const result = {
      value: Date.now(), // A random Number
    };

    expect(result).toEqual({ value: expect.any(Number) });
  });
});
