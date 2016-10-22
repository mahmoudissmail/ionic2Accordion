import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataCards} from '../../components/data-cards/data-cards';
import {Data} from '../../components/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dataList: Data[];

  constructor(public navCtrl: NavController) {
    this.dataList = [
      new Data('title 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-remove-circle-outline', true),
      new Data('title 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 3', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 4', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 5', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 6', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 7', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 8', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 9', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false)
    ];
  }

}
