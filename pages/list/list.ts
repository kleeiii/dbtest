import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//, ViewChild, OnInit, Renderer
//import { NavController, NavParams, CardContent } from 'ionic-angular';

import { HospitalMapPage } from '../hospital-map/hospital-map';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  //implements OnInit

  listExpanded = false;

  searchQuery: string = '';
  Cities: string[];


  // @ViewChild("cardC") CardContent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  // If we navigated to this page, we will have an item available as a nav param

  //constructor() {
    
    this.initializeHospitals();
    
  }
 

 
  // ngOnInit() {
  //   console.log(this.CardContent.nativeElement);
  //   this.renderer.setElementStyle(this.CardContent.nativeElement, "webkitTransition", "max-height 500ms,padding 500ms");
  // }
  // toggleList() {
  //   if (this.listExpanded) {
  //     this.listExpanded = !this.listExpanded;
  //     // this.renderer.setElementStyle(this.CardContent.nativeElement, "max-height", "0px");
  //     // this.renderer.setElementStyle(this.CardContent.nativeElement, "padding", "2px 7px");
  //   }
  //   else {
  //     this.listExpanded = !this.listExpanded;
  //     // this.renderer.setElementStyle(this.CardContent.nativeElement, "max-height", "50px");
  //     // this.renderer.setElementStyle(this.CardContent.nativeElement, "padding", "5px 7px");
  //   }
  // }
  // }
  //-----------------------------------------------------------------------------
  // Kjo mund te behet o nga nje json array ose mund te behet keshtu statike
  //-----------------------------------------------------------------------------
  initializeHospitals() {
    this.Cities = [
      'Tirana',
      'Durres',
      'Berat',
      'Diber',
      'Shkoder',
      'Peshkopi',
      'Elbasan',
      'Kruje',
      'Saranda',
      'Vlora',
      'Gjirokaster',
      'Kukes',
      'Tropoj'
    ];
  }

  goHospital(){
    this.navCtrl.push(HospitalMapPage);
  }



  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeHospitals();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Cities = this.Cities.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
  

}

