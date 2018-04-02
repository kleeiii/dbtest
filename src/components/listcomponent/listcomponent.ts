import { Component } from '@angular/core';

/**
 * Generated class for the ListcomponentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listcomponent',
  templateUrl: 'listcomponent.html'
})
export class ListcomponentComponent {

  text: string;

  constructor() {
    console.log('Hello ListcomponentComponent Component');
    this.text = 'Hello World';
  }

}
