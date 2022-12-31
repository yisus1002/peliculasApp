import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string ): string {
    const baseUrl='https://www.themoviedb.org/t/p/w600_and_h900_bestv2'
    if(poster){
      return (baseUrl+poster);
    }else{
      return './assets/no-image.jpg';
    }
  }

}
