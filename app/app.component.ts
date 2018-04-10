import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HospitalMapPage } from '../pages/hospital-map/hospital-map';
import { ContactPage } from '../pages/contact/contact';

import { HospitalListPage } from '../pages/hospital-list/hospital-list';
@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  @ViewChild('myTabs') tabRef: TabsPage;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Spitalet', component: ListPage, icon: "clipboard"},
      { title: 'Kontakto', component: ContactPage, icon: "contact" },
      { title: 'Hospital Map', component: HospitalMapPage, icon: "locate" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.title == "Home") {
      this.nav.setRoot(TabsPage);
    } else {
      this.nav.setRoot(page.component);
    }
  }
}
