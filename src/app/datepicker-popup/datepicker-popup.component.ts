import {Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {DateModel} from '../models/dateModel';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.scss']
})

export class DatepickerPopupComponent implements OnInit {
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  model: any;
  DateModel: DateModel;
  constructor() {}

  ngOnInit() {
    this.DateModel = new DateModel();
    this.DateModel.day = 0;
    this.DateModel.month = 0;
    this.DateModel.year = 0;
  }
  public pickDate(date: any): void {
   this.onDatePicked.emit(this.DateModel);
  }
}
