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

  showAllModels = (): string[] | string => {
    if (this.collection.length === 0) {
      return `There is no any games`;
    }

    return this.collection;
  };

  /** Optionally we can add an ids */
  findModel = (gameName: string) => {
    const getGamesList = this.collection;

    let indexList = "";

    getGamesList.forEach((el, index) => {
      if (el.includes(gameName)) {
        indexList += `${index}, `;
      }
    });

    if (!indexList) {
      return `Game is not Found`;
    }

    return `Game Found under index ${indexList}`;
  };
  updateModel = () => {};
}
