import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
//import { NavController, NavParams, CardContent } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{
  
  listExpanded=false;

  @ViewChild("cardC") CardContent:any;
 
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
 constructor(public renderer: Renderer ){
   
 }

  ngOnInit(){
    console.log(this.CardContent.nativeElement);
this.renderer.setElementStyle(this.CardContent.nativeElement,"webkitTransition","max-height 500ms,padding 500ms");
  }
  toggleList(){
if(this.listExpanded){
this.renderer.setElementStyle(this.CardContent.nativeElement,"max-height","0px");
this.renderer.setElementStyle(this.CardContent.nativeElement,"padding", "2px 7px");
}
else{
  this.renderer.setElementStyle(this.CardContent.nativeElement,"max-height","50px");
  this.renderer.setElementStyle(this.CardContent.nativeElement,"padding", "5px 7px");
}
this.listExpanded=!this.listExpanded;
  }
}

