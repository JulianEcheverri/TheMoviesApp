import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '../../models/moviemodel';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() movie: MovieModel;

  ngOnInit() {
  }

  movieDetail() {
    this.router.navigate(['/moviedetail', this.movie.id]);
  }
}
