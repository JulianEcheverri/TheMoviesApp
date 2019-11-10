import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.mocky.io/v2/5dc3c053300000540034757b';

  constructor(private http: HttpClient) {}

  getTopFiveMovies() {
    return this.http.get(this.url);
  }
}
