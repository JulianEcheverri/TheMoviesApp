import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-topfive',
  templateUrl: './topfive.component.html',
  styleUrls: ['./topfive.component.css']
})
export class TopfiveComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {
    this.movieService.getTopFiveMovies().subscribe((data: any) => {
      this.movies = data.movies;
      console.log(data);
    });
   }

  ngOnInit() {
  }

}
