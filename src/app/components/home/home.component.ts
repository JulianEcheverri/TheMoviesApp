import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/moviemodel';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movieSelected: MovieModel;
  moviesInLocalStore: boolean;
  constructor() {}

  ngOnInit() {
    this.moviesInLocalStore = localStorage.length > 0;
  }

  getMovie(movie: any) {
    this.movieSelected = movie;
  }

}
