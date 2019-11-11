import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieModel } from '../../models/moviemodel';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {
  movieForm: FormGroup;
  movieModel: MovieModel;

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    return this.movieForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Release: ['', Validators.required],
      Description: ['', Validators.required],
      Image: ['', Validators.required]
    });
  }

  resetForm() {
    this.movieForm.reset();
  }

  saveForm(title, release, description, image) {
    this.movieModel = {
      title,
      release,
      description,
      image
    };
    console.log(this.movieModel);
    this.movieService.addMovie(this.movieModel);
    return false;
  }
}
