import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MovieModel } from "../../models/moviemodel";
import { MovieService } from "../../services/movie/movie.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;
  @Output() movieSelected: EventEmitter<MovieModel>;
  @Output() movieDeleted: EventEmitter<MovieModel>;

  constructor(private movieService: MovieService) {
    this.movieSelected = new EventEmitter();
    this.movieDeleted = new EventEmitter();
  }

  ngOnInit() {}

  movieDetail() {
    this.movieSelected.emit(this.movie);
  }

  deleteMovie(movie: any) {
    if (confirm("Are you sure you want to delete this movie?")) {
      let deleted = this.movieService.deleteMovie(movie.id);
      this.movieDeleted.emit(movie);
      return deleted;
    }
  }
}
