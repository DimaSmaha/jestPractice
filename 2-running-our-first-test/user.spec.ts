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
});
