import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.scss']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast:any[]=[];
  public ele!:Swiper;


  constructor() { }
  ngAfterViewInit(): void {
    this.ele = new Swiper('.swiper', {
      // loop: true,
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    
    });
  }

  ngOnInit(): void {    
  }

  onSlideprev(){
    this.ele.slidePrev();
  }
  onSlidenext(){
    this.ele.slideNext();
  }

}
