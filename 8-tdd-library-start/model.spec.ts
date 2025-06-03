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
