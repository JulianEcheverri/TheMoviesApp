import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/moviemodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  movieSelected: MovieModel;
  constructor() { }

  ngOnInit() {
  }
  
  getMovieSelected(movie: any){
    this.movieSelected = movie;
  }
}
