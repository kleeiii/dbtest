import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  Spitale: any;

  constructor(public navCtrl: NavController) {
    this.Spitale = [
      'Nene Tereza',
      'Ushtarak',
      'Amerikan',
      'Gjerman'
      
  ];
  }

}