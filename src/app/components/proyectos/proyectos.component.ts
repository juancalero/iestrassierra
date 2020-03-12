import { Component, OnInit, Input } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input() proyectos: any;
  faLaptopCode = faLaptopCode;

  constructor() { }

  ngOnInit() {
  }

}
