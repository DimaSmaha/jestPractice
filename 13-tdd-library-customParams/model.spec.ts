import Model from "./model";

function createModel(data?: string[]) {
  return new Model(data);
}

describe("model", () => {
  test("Instance of", () => {
    expect(createModel()).toBeInstanceOf(Model);
  });

  test("check properties", () => {
    expect(createModel()).toEqual({
      collection: expect.any(Array),
      addModel: expect.any(Function),
      showAllModels: expect.any(Function),
      findModel: expect.any(Function),
      updateModel: expect.any(Function),
    });
  });

  test("check properties method", () => {
    expect(createModel()).toEqual(
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
    const model = createModel();

    model.addModel(games);
    expect(model.collection).toEqual(games);
  });

  test("check addModel method direct", () => {
    const model = createModel(games);
    expect(model.collection).toEqual(games);
  });

  test("check addModel method with Spy", () => {
    const model = createModel();

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

describe("showAllModels method", () => {
  const games = ["Witcher 3", "GTA V"];
  test("check showAllModels", () => {
    const model = createModel(games);

    expect(model.showAllModels()).toEqual(games);
    expect(model.showAllModels().length).toBe(2);
  });

  test("check showAllModels when its empty", () => {
    const model = createModel();
    expect(model.showAllModels()).toEqual("There is no any games");
  });

  test("check showAllModels method with Spy", () => {
    const model = createModel(games);

    const spy = jest.spyOn(model, "showAllModels");
    expect(model.showAllModels()).toEqual(games);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  // test("check showAllModels original data is the same", () => {
  //   const model = createModel(games);
  //   const data = model.showAllModels();
  //   //Index signature in type 'string | string[]' only permits reading.ts(2542)
  //   data[0] = "fff";
  // });
});

describe("findModel method", () => {
  let games: string[];
  let model: Model;
  beforeEach(() => {
    games = ["Witcher 3", "GTA V"];
    model = createModel(games);
  });

  test("check findModel null", () => {
    expect(model.findModel("NFS")).toEqual("Game is not Found");
  });

  test("check findModel", () => {
    expect(model.findModel("GTA V")).toEqual(`Game Found under index 1, `);
  });

  test("check findModel not full name", () => {
    expect(model.findModel("GTA")).toEqual(`Game Found under index 1, `);
  });

  test("check findModel multiple entities", () => {
    model.addModel(["GTA IV"]);
    expect(model.findModel("GTA")).toEqual(`Game Found under index 1, 2, `);
  });
});
