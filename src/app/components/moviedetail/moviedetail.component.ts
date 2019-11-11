import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/moviemodel';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  movie: MovieModel;
  // @Input() index: number;
  
  constructor(private router: ActivatedRoute, private movieService: MovieService) {
    this.router.params.subscribe(item => {
      this.movie = this.movieService.getMovie(item.id);
        //console.log(this.movie);
    });
   }

  ngOnInit() {
  }
}
