import { Component, OnInit, Input } from '@angular/core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  @Input() formacion: any;
  faUserGraduate = faUserGraduate;

  constructor() { }

  ngOnInit() {
  }

}
