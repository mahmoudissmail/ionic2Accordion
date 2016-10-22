import { Component } from '@angular/core';
import { Data } from '../data/data';

@Component({
  selector: 'data-cards',
  inputs: ['data'],
  templateUrl: 'data-cards.html'
})
export class DataCards {

  public data: Data[];

  constructor() {}

  toggleDetails(data: Data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }

}
