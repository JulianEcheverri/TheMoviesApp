# MoviesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Running unit tests

That unit test belongs to a component. Define the unit testing you want to test. About any functionality, structure etc.

Declare the component for get his data and functions
*** 
    let movieService: MovieService;
*** 

Instance the component in the beforeEach method. Is an asnyc call because we want to the page charge first
 *** 
  beforeEach(async(() => {
    movieService = new MovieService();
  }));
 *** 

  Each test begins with the word it. Its first parameter is a string that we will return if the test is correct
  ***
    it(`should be an emty array`, async (() => {
        // expect evaluates the predicate, in this case, a component's property
        expect(movieService.movies).toEqual([]);
    }));
  ***

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

