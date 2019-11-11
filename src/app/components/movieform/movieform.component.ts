import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieModel } from '../../models/moviemodel';
import { MovieService } from '../../services/movie/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {
  movieForm: FormGroup;
  movieModel: MovieModel;
  base64textString: string;

  constructor(private formBuilder: FormBuilder, private movieService: MovieService, private router: Router) {
    this.movieForm = this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    return this.movieForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Release: ['', Validators.required],
      Description: [''],
      Image: ['', Validators.required]
    });
  }

  resetForm() {
    this.movieForm.reset();
  }

  saveForm(title, release, description, image, id = 0) {
    image = this.base64textString;
    this.movieModel = {
      title,
      release,
      description,
      image ,
      id
    };
    console.log(this.movieModel);
    this.movieService.addMovie(this.movieModel);
    this.router.navigate(['/home']);
    return false;
  }

  handleFileSelect(event: any){
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
}
