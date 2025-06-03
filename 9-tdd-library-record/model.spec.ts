import Model from "./model";

describe("model", () => {
  test("Instance of", () => {
    expect(new Model()).toBeInstanceOf(Model);
  });

  test("check properties", () => {
    expect(new Model()).toEqual({
      collection: expect.any(Array),
      addModel: expect.any(Function),
      showAllModels: expect.any(Function),
      findModel: expect.any(Function),
      updateModel: expect.any(Function),
    });
  });

  test("check properties method", () => {
    expect(new Model()).toEqual(
      expect.objectContaining({
        collection: expect.any(Array),
        addModel: expect.any(Function),
        showAllModels: expect.any(Function),
        findModel: expect.any(Function),
        updateModel: expect.any(Function),
      })
    );
  });
});

describe("addModel method", () => {
  const games = ["Witcher 3", "GTA V"];
  test("check addModel method", () => {
    const model = new Model();

    model.addModel(games);
    expect(model.collection).toEqual(games);
  });

  test("check addModel method direct", () => {
    const model = new Model(games);
    expect(model.collection).toEqual(games);
  });

  test("check addModel method with Spy", () => {
    const model = new Model();

    const spy = jest.spyOn(model, "addModel");
    model.addModel(games);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  test("check addModel method with Spy 2 ", () => {
    const games2 = ["NFS", "Zelda"];

    const spy = jest.spyOn(Model.prototype, "addModel");
    const model = new Model(games2);
    model.addModel(games);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
    expect(model.collection).toEqual(["NFS", "Zelda", "Witcher 3", "GTA V"]);
  });
});
