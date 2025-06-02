const user = {
  name: "Tony Tinkerton",
  age: 42,
  job: "inventor",
};

describe("Snaps", () => {
  test("without snapshots", () => {
    const userString = '{"name":"Tony Tinkerton","age":42,"job":"inventor"}';

    expect(JSON.stringify(user)).toEqual(userString);
  });

  test("user matches with snapshot", () => {
    expect(user).toMatchSnapshot();
  });
});
