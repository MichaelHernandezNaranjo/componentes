import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async showToast(color: any) {
    const toast = await this.toastController.create({
      message: 'Notificación toast de color: ' + color,
      duration: 1000,
      position:'bottom',
      color: color,
      cssClass: 'toast-1-css',
    });
    toast.present();
  }

}
