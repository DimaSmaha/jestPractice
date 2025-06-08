import Model from "./model";

describe("global", () => {
  const games = ["Witcher 3", "GTA V"];
  const addedGames = [
    { id: 0, gameName: "Witcher 3" },
    { id: 1, gameName: "GTA V" },
  ];

  describe("model", () => {
    test("Instance of", () => {
      expect(new Model()).toBeInstanceOf(Model);
    });

    test("check properties", () => {
      expect(new Model()).toEqual({
        collection: expect.any(Array),
        addModel: expect.any(Function),
        showAllModels: expect.any(Function),
        findModelById: expect.any(Function),
        findModelByName: expect.any(Function),
        updateModelById: expect.any(Function),
      });
    });

    test("check properties method", () => {
      expect(new Model()).toEqual(
        expect.objectContaining({
          collection: expect.any(Array),
          addModel: expect.any(Function),
          showAllModels: expect.any(Function),
          findModelById: expect.any(Function),
          findModelByName: expect.any(Function),
          updateModelById: expect.any(Function),
        })
      );
    });
  });

  describe("addModel method", () => {
    test("check addModel method", () => {
      const model = new Model();

      model.addModel(games);
      expect(model.collection).toEqual(addedGames);
    });

    test("check addModel method direct", () => {
      const model = new Model(games);
      expect(model.collection).toEqual(addedGames);
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
      const addedGames2 = [
        { id: 0, gameName: "NFS" },
        { id: 1, gameName: "Zelda" },
        { id: 2, gameName: "Witcher 3" },
        { id: 3, gameName: "GTA V" },
      ];
      const spy = jest.spyOn(Model.prototype, "addModel");
      const model = new Model(games2);
      model.addModel(games);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
      spy.mockRestore();
      expect(model.collection).toEqual(addedGames2);
    });
  });

  describe("showAllModels method", () => {
    test("check showAllModels", () => {
      const model = new Model(games);

      expect(model.showAllModels()).toEqual(addedGames);
      expect(model.showAllModels().length).toBe(2);
    });

    test("check showAllModels when its empty", () => {
      const model = new Model();
      expect(model.showAllModels()).toEqual("There is no any games");
    });

    test("check showAllModels method with Spy", () => {
      const model = new Model(games);

      const spy = jest.spyOn(model, "showAllModels");
      expect(model.showAllModels()).toEqual(addedGames);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });

    // test("check showAllModels original data is the same", () => {
    //   const model = new Model(games);
    //   const data = model.showAllModels();
    //   //Index signature in type 'string | string[]' only permits reading.ts(2542)
    //   data[0] = "fff";
    // });
  });

  describe("findModelById method", () => {
    let model: Model;
    beforeEach(() => {
      model = new Model(games);
    });

    test("check findModel null", () => {
      expect(model.findModelById(3)).toEqual("Game is not Found");
    });

    test("check findModel", () => {
      expect(model.findModelById(1)).toEqual(
        `Game Found under index 1 --> GTA V`
      );
    });
  });

  describe("findModelByName method", () => {
    let model: Model;
    beforeEach(() => {
      model = new Model(games);
    });

    test("check findModel null", () => {
      expect(model.findModelByName("NFS")).toEqual("Game is not Found");
    });

    test("check findModel", () => {
      expect(model.findModelByName("GTA V")).toEqual(
        `Game Found under index 1, `
      );
    });

    test("check findModel not full name", () => {
      expect(model.findModelByName("GTA")).toEqual(
        `Game Found under index 1, `
      );
    });

    test("check findModel multiple entities", () => {
      model.addModel(["GTA IV"]);
      expect(model.findModelByName("GTA")).toEqual(
        `Game Found under index 1, 2, `
      );
    });
  });

  describe("updateModelById method", () => {
    let model: Model;
    beforeEach(() => {
      model = new Model(games);
    });

    test("check updateModelById", () => {
      expect(model.updateModelById(1, "GTA VI")).toEqual([
        { id: 0, gameName: "Witcher 3" },
        { id: 1, gameName: "GTA VI" },
      ]);
    });

    test("check updateModelById null", () => {
      expect(model.updateModelById(2, "GTA VI")).toEqual("Game is not Found");
    });
  });
});
