import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slidershow',
  templateUrl: './slidershow.component.html',
  styleUrls: ['./slidershow.component.scss']
})
export class SlidershowComponent implements OnInit, AfterViewInit {

  @Input() movies:Movie[]=[];
  public ele!:Swiper;
  constructor() { }
  ngAfterViewInit(): void {
    this.ele = new Swiper('.swiper', {
      loop: true,
        // Navigation arrows
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
    
    });
    setInterval(() => {
      this.ele.slideNext()
    }, 10000);
  }

  ngOnInit(): void {
    // console.log(this.movies);
    
  }

  onSlideprev(){
    this.ele.slidePrev();
  }
  onSlidenext(){
    this.ele.slideNext();
  }


}
