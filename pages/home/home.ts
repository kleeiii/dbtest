import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { BodyMappingPage } from '../body-mapping/body-mapping';
import { AllSymptomsPage } from '../all-symptoms/all-symptoms';
import { HospitalMapPage } from '../hospital-map/hospital-map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  goToListHospitals(){
    this.navCtrl.push(ListPage);
  }

  goToBodyMapping(){
    this.navCtrl.push(BodyMappingPage);
  }

  checkSymptoms(){
    this.navCtrl.push(AllSymptomsPage);
  }

  goToMapDirectly(){
    this.navCtrl.push(HospitalMapPage);
  }
}
