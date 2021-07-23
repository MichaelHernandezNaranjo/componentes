import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  progreso: number = 0.0;

  mas(){
    if(this.progreso < 1){
      this.progreso += 0.1;
    }
    console.log(this.progreso)
  }
  menos(){
    if(this.progreso > 0){
      this.progreso -= 0.1;
    }
    console.log(this.progreso)
  }

}
