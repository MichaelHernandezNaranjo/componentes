import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  valor: string = 'PCA';

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    this.valor = ev.detail.value; 
  }

}
