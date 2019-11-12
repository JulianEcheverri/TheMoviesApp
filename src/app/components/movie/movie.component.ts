import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '../../models/moviemodel';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieModel;
  @Output() movieSelected: EventEmitter<MovieModel>;

  constructor(private router: Router) {
    this.movieSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  movieDetail() {
    // console.log(this.movie.id);
    this.movieSelected.emit(this.movie);
    // this.router.navigate(['/moviedetail', this.movie.id]);
  }
}
