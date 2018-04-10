import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


import { DBItem } from '../../models/db-item/db-item.interface';
@Component({
  selector: 'page-db-test',
  templateUrl: 'db-test.html',
})
export class DbTestPage {
  dbItem = {} as DBItem;
  dbItemRef$: FirebaseListObservable<DBItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  
    /* pointing hospitalListRef$ at Firebase -> 'hospital-list' node.
    we have access to everything inside of that node. */
    this.dbItemRef$ = this.database.list('hospital-list');

  }

  DBTest(dbItem: DBItem){
    
    this.dbItemRef$.push({
      itemName: this.dbItem.h_name,
      itemLat: this.dbItem.h_lat,
      itemLong: this.dbItem.h_long
    })
  }
}