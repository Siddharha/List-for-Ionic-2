import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items:any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.items = [{'name':'Bread',
    				'imgs':'ico'},
    				{'name':'Chicken',
    				'imgs':'ico'},
    				{'name':'Egg',
    				'imgs':'ico'},
    				{'name':'Fish',
    				'imgs':'ico'},
    				{'name':'Rice',
    				'imgs':'ico'},
    				{'name':'Oil',
    				'imgs':'ico'}]
        }

itemSelected(s){
this.presentToast(s);
}

presentToast(s) {
    let toast = this.toastCtrl.create({
      message: s,
      duration: 3000,
      position: 'top',
      closeButtonText:"Close",
      showCloseButton:true
    });
    toast.present();
  }
}
