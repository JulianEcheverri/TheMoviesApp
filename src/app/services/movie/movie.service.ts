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

  addMovie(movieForm: MovieModel) {
    let movieToAdd: MovieModel[] = [];
    if (localStorage.getItem('movies') === null) {
      movieToAdd.push(movieForm);
      localStorage.setItem('movies', JSON.stringify(movieToAdd));
    } else {
      movieToAdd = JSON.parse(localStorage.getItem('movies'));
      movieToAdd.push(movieForm);
      localStorage.setItem('movies', JSON.stringify(movieToAdd));
    }
    this.movies.push(movieForm);
  }
}