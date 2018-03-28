import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;

  constructor() {

  }
}