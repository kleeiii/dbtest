import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DbTestPage } from './db-test';

@NgModule({
  declarations: [
    DbTestPage,
  ],
  imports: [
    IonicPageModule.forChild(DbTestPage),
  ],
})
export class DbTestPageModule {}
