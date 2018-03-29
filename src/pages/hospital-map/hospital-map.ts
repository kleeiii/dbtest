import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google;

@IonicPage()
@Component({
  selector: 'page-hospital-map',
  templateUrl: 'hospital-map.html',
})
export class HospitalMapPage {
  image: any;
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.initMap();
    
  }

  // loadMap() {

  //   let latLng = new google.maps.LatLng(41.3188151, 19.8112196);
  //   var uluru = {lat: 41.3188151, lng: 19.8112196};

  //   let mapOptions = {

  //     position: uluru,
  //     center: uluru,
  //     zoom: 16,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP

  //   }

  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  // }



  initMap() {
    var uluru = { lat: 41.3188151, lng: 19.8112196 };
    //ndrysgon 
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru

    });


    
    this.image = 'assets/icon/custom-marker.png'
    var marker = new google.maps.Marker({
      position: uluru,
      icon: this.image,
      map: map
    });



    

  
  }
}
