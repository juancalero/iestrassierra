import { Component, OnInit, Input } from '@angular/core';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  @Input() cursos: any;
  faBookReader = faBookReader;

  constructor() { }

  ngOnInit() {
  }

}
