import { Component, OnInit, Input } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
@Input() experiencias: any;
faBuilding = faBuilding;

  constructor() { }

  ngOnInit() {
  }


}
