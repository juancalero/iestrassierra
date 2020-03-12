import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase';
  items: any;
  experienciasList: Array<object> = [];
  formacionList: Array<object> = [];
  cursosList: Array<object> = [];
  certificacionesList: Array<object> = [];
  proyectosList: Array<object> = [];
  publicacionesList: Array<object> = [];
  nombre: string;
  apellido: string;
  foto: string;
  github: string;
  linkedin: string;
  mail: string;
  resumen: string;
  
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getData().subscribe(result =>{
      this.nombre = result['nombre'];
      this.apellido = result['apellido'];
      this.foto = result['foto'];
      this.github = result['github'];
      this.linkedin = result['linkedin'];
      this.mail = result['mail'];
      this.resumen = result['resumen'];      
      this.experienciasList = result['experiencia'];
      this.formacionList = result['formacion'];
      this.cursosList = result['cursos'];
      this.certificacionesList = result['certificaciones'];
      this.proyectosList = result['proyectos'];
      this.publicacionesList = result['publicaciones'];
      
    });    
  }
}
