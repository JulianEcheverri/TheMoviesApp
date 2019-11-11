import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopfiveComponent } from './components/topfive/topfive.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { MovieformComponent } from './components/movieform/movieform.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'moviedetail/:id', component: MoviedetailComponent},
  {path: 'movieform', component: MovieformComponent},
  {path: 'topfive', component: TopfiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
