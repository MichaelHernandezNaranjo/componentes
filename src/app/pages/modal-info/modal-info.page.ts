import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() pais: string;

  constructor(private _modalController: ModalController) { }

  ngOnInit() {
  }
  salirSinArgumentos() {
    this._modalController.dismiss();
  }
  salirConArgumentos() {
    this._modalController.dismiss({
      nombre: 'Modal Info',
      pais: 'Modal'
    })
  }

}
