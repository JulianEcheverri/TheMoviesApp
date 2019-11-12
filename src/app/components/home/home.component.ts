import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/moviemodel';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movieSelected: MovieModel;
  movieDelete: MovieModel;
  moviesInLocalStore: boolean;
  constructor() {}

  ngOnInit() {
    this.moviesInStore();
  }

  getMovie(movie: any) {
    this.movieSelected = movie;
  }

  getMovieDeleted(movie: any) {
    this.movieDelete = movie;
    this.moviesInStore();
  }

  moviesInStore(){
    this.moviesInLocalStore = localStorage.length > 0;
  }
}
