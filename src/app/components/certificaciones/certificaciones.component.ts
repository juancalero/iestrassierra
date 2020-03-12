import { Component, OnInit, Input } from '@angular/core';
import { faAward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  @Input() certificaciones: any;
  faAward = faAward;
  constructor() { }

  ngOnInit() {
  }

}
