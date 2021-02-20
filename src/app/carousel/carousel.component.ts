import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  @Input() titulo: String;
  @Input() descripcion: String;
  @Input() fotos: String[];
  @Input() order: String = "1";
  
  constructor() { }

  ngOnInit(): void {
  }

}
