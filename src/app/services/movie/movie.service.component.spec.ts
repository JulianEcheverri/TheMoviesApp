import { TestBed, async } from "@angular/core/testing";
import { MovieService } from './movie.service';

describe("MovieService", () => {
  let movieService: MovieService;

  beforeEach(async(() => {
    movieService = new MovieService();
  }));

  it(`should be an emty array`, async (() => {
    expect(movieService.movies).toEqual([]);
  }));
});
