import User from "./user";

describe("User Tests", () => {
  it("getFullName", () => {
    const newUser = new User("Dima", "Smaha");

    expect(newUser.getFullName()).toEqual("Dima Smaha");
  });

  it("getFullName", () => {
    const newUser = new User("Dima", "Sm");

    expect(newUser.getFullName()).toBe("Dima Sm");
  });

  it("Check throw error", () => {
    const newUser = new User("Dima", "123");

    expect(() => newUser.getFullName()).toThrow(TypeError);

    //  expect(newUser.getFullName()).toThrow(TypeError);
    //  toThrow expects a function, not a value. When you write getFullName(), the error is thrown before Jest can catch it.
  });
});
