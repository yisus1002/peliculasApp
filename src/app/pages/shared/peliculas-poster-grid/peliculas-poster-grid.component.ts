import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies:Movie[]=[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  verPelicula(movie:Movie){
    this.router.navigate(['pelicula', movie.id])
  }
   

}
