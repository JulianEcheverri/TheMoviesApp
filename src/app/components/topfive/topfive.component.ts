import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/api/movieapi.service';

@Component({
  selector: 'app-topfive',
  templateUrl: './topfive.component.html',
  styleUrls: ['./topfive.component.css']
})
export class TopfiveComponent implements OnInit {
  movies: any[] = [];
  loading: boolean = true;

  constructor(private movieService: MovieService) {
    this.movieService.getTopFiveMovies().subscribe((data: any) => {
      this.movies = data;
    });    
   }

  ngOnInit() {
    this.loading = true;
  }

}
