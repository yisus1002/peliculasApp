import { Cast, CreditsResponse } from './../interfaces/credits-response';
import { MovieDetails } from './../interfaces/movie-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  public baseUrl = 'https://api.themoviedb.org/3/';
  public carteleraPage:number =1;
  public cargando:boolean=false;
  
  constructor(private http:HttpClient) { }

  get params(){
    return {
      api_key:'baceb76e029be59213abac8e336d9d6a',
      language:'es-ES',
      page: this.carteleraPage.toString(),
    }
  }
  resetCartelera(){
    this.carteleraPage=1;
  }

  getCartelera():Observable<Movie[]>{
    if(this.cargando){
      return of([]);
    }

    this.cargando=true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}movie/now_playing`, {params: this.params})
    .pipe(
      map((data)=>data.results),
      tap(()=>{
      this.carteleraPage +=1;
      this.cargando= false;
    }));
  }

  buscarPelicula(texto:string):Observable<Movie[]>{
    const params ={...this.params, page: 1, query:texto}
    return this.http.get<CarteleraResponse>(`${this.baseUrl}search/movie`,
    {params}
    ).pipe(
      map((data)=>data.results)
    )
  }

  detallePeelicula(id:string):Observable<MovieDetails>{
    const params ={...this.params, page: 1}
    return this.http.get<MovieDetails>(`${this.baseUrl}movie/${id}`,
    {params}).pipe(
      // catchError( err=> {return of()} )
    )
  }
  getCast(id:string):Observable<Cast[]>{
    const params ={...this.params, page: 1}
    return this.http.get<CreditsResponse>(`${this.baseUrl}movie/${id}/credits`,
    {params}).pipe(
      // catchError( err=> of( ) ),
      map((data)=>{
        return data.cast;
      })
    )
  }


}