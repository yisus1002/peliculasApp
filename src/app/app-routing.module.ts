import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'pelicula/:id', component: PeliculaComponent },
  {path:'buscar/:texto', component: BuscarComponent },
  
  {path: "", redirectTo: "home", pathMatch: "full",},
  {path: '**', redirectTo: "home", pathMatch: "full",},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
