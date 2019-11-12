import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { TopfiveComponent } from './components/topfive/topfive.component';
import { MovieformComponent } from './components/movieform/movieform.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './services/movie/movie.service';
import { DomsanitizerPipe } from './pipes/domsanitizer.pipe';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    MoviedetailComponent,
    TopfiveComponent,
    MovieformComponent,
    MovielistComponent,
    DomsanitizerPipe,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
