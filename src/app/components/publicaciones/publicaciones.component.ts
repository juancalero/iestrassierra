import { Component, OnInit, Input } from '@angular/core';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  @Input() publicaciones: any;
  faChalkboardTeacher = faChalkboardTeacher;

  constructor() { }

  ngOnInit() {
  }

}
