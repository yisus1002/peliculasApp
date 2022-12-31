import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlidershowComponent } from './shared/slidershow/slidershow.component';
import { PeliculasPosterGridComponent } from './shared/peliculas-poster-grid/peliculas-poster-grid.component';


// import { RatingModule } from 'ng-starrating';
import { CastSlideshowComponent } from './shared/cast-slideshow/cast-slideshow.component';

@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    SlidershowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // RatingModule,
    PipesModule,
  ],
  exports:[
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    SlidershowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
  ]
})
export class PagesModule { }
