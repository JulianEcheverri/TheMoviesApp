import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getData(){
    const url = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
    return this.http.get(url);
  }

  getTopFiveMovies() {
    return this.getData().pipe(map((data: any) => data.movies));
  }
}
