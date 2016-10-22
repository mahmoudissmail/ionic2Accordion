import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Data } from '../components/data/data';
import { DataCards } from '../components/data-cards/data-cards';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Data,
    DataCards
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Data,
    DataCards
  ],
  providers: []
})
export class AppModule {}
