import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent{

  listaCurso: string[] = ['Curso1','Curso2','Curso3','Curso4']
  habilitar : boolean = true; 
  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true? false:true)
  }
}
