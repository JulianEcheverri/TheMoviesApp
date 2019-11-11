import { Injectable } from '@angular/core';
import { MovieModel } from '../../models/moviemodel';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: MovieModel[];

  constructor() {
    this.movies = [];
  }

  getMovies() {
    return this.movies = localStorage.getItem('movies') === null ? this.movies : JSON.parse(localStorage.getItem('movies'));
  }

  getMovie(idx: number) {
    return this.getMovies().find(x => x.id == idx);
  }


  addMovie(movieForm: MovieModel) {
    let movieArray: MovieModel[] = [];
    if (localStorage.getItem('movies') === null) {
      movieForm.id = movieForm.id + 1;
      movieArray.push(movieForm);
      localStorage.setItem('movies', JSON.stringify(movieArray));
    } else {
      movieArray = JSON.parse(localStorage.getItem('movies'));
      const movieLength = movieArray.length;
      movieForm.id = movieLength + 1;
      movieArray.push(movieForm);
      localStorage.setItem('movies', JSON.stringify(movieArray));
    }
    this.movies.push(movieForm);
  }
}