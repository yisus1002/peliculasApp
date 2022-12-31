import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  public termino: string='';
  public movie:Movie[]=[];
  constructor(
    private activateRoute: ActivatedRoute,
    private _sPeli: PeliculasService,
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      const texto=(params['texto'].toString());
      this.termino=texto;
      this._sPeli.buscarPelicula(texto).subscribe( (data)=>{
        console.log(data);
        this.movie=data;
      })
    })
  }

}
