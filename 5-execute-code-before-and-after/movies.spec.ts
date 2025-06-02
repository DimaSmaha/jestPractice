import Movies from "./movies";

describe("Movies", () => {
  let movies: Movies;
  beforeAll(() => {
    movies = new Movies();
    movies.addMovie("Jumanji");
  });

  test("Test Add Movie", () => {
    movies.addMovie("Fast & Furious");

    expect(movies.getCollection()).toMatchSnapshot();
    // expect(movies.getCollection()).toEqual([
    //   { title: "Jumanji", rating: null },
    //   { title: "Fast & Furious", rating: null },
    // ]);
  });

  test("Test Add Rating", () => {
    movies.rateMovie(0, 5);

    expect(movies.getCollection()).toMatchSnapshot();
    // expect(movies.getCollection()).toEqual([
    //   { title: "Jumanji", rating: 5 },
    //   { title: "Fast & Furious", rating: null },
    // ]);
  });
});
