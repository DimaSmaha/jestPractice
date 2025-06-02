export default class Movies {
  collection: { title: string; rating: number | null }[];

  constructor() {
    this.collection = [];
  }

  addMovie = (movieName: string) => {
    this.collection.push({
      title: `${movieName}`,
      rating: null,
    });
  };

  rateMovie = (movieNumber: number, rating: number) => {
    this.collection[movieNumber].rating = rating;
  };

  getCollection = () => this.collection;
}
