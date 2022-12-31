import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

public movie:Movie[]=[];
public movieSlideshow:Movie[]=[];

@HostListener('window:scroll', ['$event'])
onsScroll(){
  const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
  const max = (document.documentElement.scrollHeight || document.body.scrollHeight)
  // console.log({pos, max});

  if(pos > max){
    console.log('llamar servicio');
    if(this._sPeli.cargando){
      return;
    }
    this._sPeli.getCartelera()
    .subscribe( data=>{
      this.movie.push(...data);
    })
  }
}

  constructor(private _sPeli:PeliculasService){}
  ngOnDestroy(): void {
    this._sPeli.resetCartelera();
  }

  ngOnInit(): void {
    this.peliculas();
  } 
  
  public peliculas(){
    this._sPeli.getCartelera()
        .subscribe({
          next:(data)=>{
            // console.log(data.results);
            this.movie=data;
            this.movieSlideshow=data;
          },
          error:( error:any)=>{
            console.log(error);
          }
        })
      }


}
