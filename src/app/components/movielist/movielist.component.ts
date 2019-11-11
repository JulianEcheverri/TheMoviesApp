import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MovieModel } from 'src/app/models/moviemodel';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies: MovieModel[];

  // instance the movie service for get the data
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // get the movies
    this.movies = this.movieService.getMovies();
  }

}
