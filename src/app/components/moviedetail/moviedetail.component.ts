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
  @Input() movieForDetail: MovieModel;
  @Input() movieForDelete: MovieModel;

  constructor(private router: ActivatedRoute, private movieService: MovieService) {
   }

  ngOnInit() {

  }

  ngDoCheck(){
      this.movie = this.movieForDetail;
  }
}
