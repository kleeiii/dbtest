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

  //lat: 41.3188151, lng: 19.8112196

  initMap() {
    var location ={lat:  41.3188151, lng: 19.8112196}; 
  var Tirane={lat:41.328209, lng:19.818061};
  var Durres={lat:41.324716, lng:19.456588};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: location

    });
    this.image = 'assets/icon/custom-marker.png'
    var marker = new google.maps.Marker({
      position: location,
      icon: this.image,
      map: map
    });
    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });
    // Set destination, origin and travel mode.
    var request = {
      destination: Durres,
      origin: Tirane,
      travelMode: 'DRIVING'
    };
    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        // Display the route on the map.
        directionsDisplay.setDirections(response);
      }
    });
  }
}


