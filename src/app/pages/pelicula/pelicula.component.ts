import { MovieDetails } from './../../interfaces/movie-response';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
  public movie!:MovieDetails;
  public cast!:Cast[];
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private _sPeli:PeliculasService,
    private location:Location,
    private router:Router,
    ) {
    
   }

  ngOnInit(): void {
    const { id } = this.ActivatedRoute.snapshot.params;

    combineLatest([
      this._sPeli.detallePeelicula(id),
      this._sPeli.getCast(id)

    ]).subscribe({
      next : ([pelicula, actores]) => {
      
        this.movie=pelicula;
        this.cast=actores.filter(ele=> ele.profile_path!=null)
        
      },
      error: ()=>{
        this.router.navigateByUrl('/home')
      }
    })    
  }



  btnRegresar(){
    this.location.back()
  }

}
