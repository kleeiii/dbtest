import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HospitalMapPage } from '../pages/hospital-map/hospital-map';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  @ViewChild('myTabs') tabRef: TabsPage;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Spitalet', component: ListPage },
      { title: 'Kontakto', component: ContactPage },
      { title: 'Hospital Map', component: HospitalMapPage }
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
    } else if (page.title == "Kontakto") {

    } else {
      this.nav.setRoot(page.component);
    }
  }
}
