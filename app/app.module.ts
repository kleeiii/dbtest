import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HospitalMapPage } from '../pages/hospital-map/hospital-map';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { BodyMappingPage } from '../pages/body-mapping/body-mapping';
import { AllSymptomsPage } from '../pages/all-symptoms/all-symptoms';
import { HospitalListPage } from '../pages/hospital-list/hospital-list';
import { DbTestPage } from '../pages/db-test/db-test';



import { ListcomponentComponent } from '../components/listcomponent/listcomponent';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HospitalMapPage,
    TabsPage,
    ContactPage,
    BodyMappingPage,
    AllSymptomsPage,
    ListcomponentComponent,
    HospitalListPage,
    DbTestPage
  ],
  imports: [
    BrowserModule,
    IonicModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
        AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HospitalMapPage,
    TabsPage,
    ContactPage,
    BodyMappingPage,
    AllSymptomsPage,
    ListcomponentComponent,
    HospitalListPage,
    DbTestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
