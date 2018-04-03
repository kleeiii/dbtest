import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

items:any =new Array(10);

  constructor(public navCtrl: NavController) {

  }

}