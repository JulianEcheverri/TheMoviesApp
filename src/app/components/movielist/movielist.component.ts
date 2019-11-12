import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MovieModel } from 'src/app/models/moviemodel';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies: MovieModel[];
  movieRecieved: MovieModel;
  @Output() movie: EventEmitter<MovieModel>;
  @Output() moviesAny: EventEmitter<boolean>;

  // instance the movie service for get the data
  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies(); // get the movies
    this.movie = new EventEmitter();
  }

  ngOnInit() {
    
  }

  getMovieSelected(movie: any) {
    // console.log(movie);
    this.movieRecieved = movie;
    this.movie.emit(this.movieRecieved);
  }  

}
