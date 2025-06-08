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
    games.forEach((el) => {
      this.collection.push({ id: this.collection.length, gameName: el });
    });
  }

  showAllModels = (): string[] | string => {
    if (this.collection.length === 0) {
      return `There is no any games`;
    }

    return this.collection;
  };

  /** Optionally we can add an ids */
  findModelById = (gameId: number) => {
    const getGamesList = this.collection;

    for (let i = 0; i < getGamesList.length; i++) {
      if (getGamesList[i].id === gameId) {
        return `Game Found under index ${getGamesList[i].id} --> ${getGamesList[i].gameName}`;
      }
    }

    return `Game is not Found`;
  };

  findModelByName = (gameName: string) => {
    const getGamesList = this.collection;

    let indexList = "";

    getGamesList.forEach((el, index) => {
      if (el.gameName.includes(gameName)) {
        indexList += `${index}, `;
      }
    });

    if (!indexList) {
      return `Game is not Found`;
    }

    return `Game Found under index ${indexList}`;
  };

  updateModelById = (gameId: number, newGamesName: string) => {
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].id === gameId) {
        this.collection[i].gameName = newGamesName;
        return this.collection;
      }
    }

    return `Game is not Found`;
  };
}
