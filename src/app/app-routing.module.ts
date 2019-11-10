import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { TopfiveComponent } from './components/topfive/topfive.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addmovie', component: AddmovieComponent},
  {path: 'topfive', component: TopfiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
