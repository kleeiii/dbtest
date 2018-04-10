import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,FirebaseListObservable } from 'angularfire2/database-deprecated';

import { DbTestPage } from '../db-test/db-test';
import { DBItem } from '../../models/db-item/db-item.interface';



@Component({
  selector: 'page-hospital-list',
  templateUrl: 'hospital-list.html',
})
export class HospitalListPage {

  hospitalListRef$: FirebaseListObservable<DBItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  
    this.hospitalListRef$ = this.database.list('hospital-list');
  }

  navigateToDBTest(){
    this.navCtrl.push(DbTestPage);
  }

}
