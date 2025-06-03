export default class Model {
  collection: any[];

  constructor(data?: string[]) {
    this.collection = [];

    if (data) {
      this.addModel(data);
    }
  }

  //** Arrow function wont exist in prototype */
  addModel(games: string[]) {
    this.collection.push(...games);
  }

  showAllModels = () => {};
  findModel = () => {};
  updateModel = () => {};
}
