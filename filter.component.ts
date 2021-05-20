import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  fromDate;
  toDate;
  day;
  diff;
  minVal;
  date = new Date();

  constructor(public datepipe: DatePipe) { }
  currentDate = new Date().toISOString().split('T')[0];

  ngOnInit() {
    this.minVal = this.datepipe.transform(this.getCurrentPreviousQuarter("previous").StartDate, 'yyyy-MM-dd');
  }

  getMonday(d) {
    d = new Date(d);
    this.day = d.getDay(),
      this.diff = d.getDate() - this.day + (this.day == 0 ? -6 : 1);
    return new Date(d.setDate(this.diff));
  }

  getCurrentPreviousQuarter(value) {
    var quarter = Math.floor((this.date.getMonth() / 3)),
      startDate,
      endDate;

    switch (value) {
      case "previous":
        startDate = new Date(this.date.getFullYear(), quarter * 3 - 3, 1);
        endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 3, 0);
        break;
      default:
        startDate = new Date(this.date.getFullYear(), quarter * 3, 1);
        endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 3, 0);
        break;
    }

    return {
      StartDate: startDate,
      EndDate: endDate
    };
  }


  dateEventFilter(val) {
    this.fromDate = '';
    this.toDate = '';
    if (val === 'cWeek') {
      this.toDate = this.currentDate;
      this.fromDate = this.datepipe.transform(this.getMonday(new Date()), 'yyyy-MM-dd');
    } else if (val === 'lWeek') {
      this.toDate = this.datepipe.transform(this.date.setTime(this.date.getTime() - (this.date.getDay() ? this.date.getDay() : 7) * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')
      this.fromDate = this.datepipe.transform(this.date.setTime(this.date.getTime() - 6 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')
    } else if (val === 'cMonth') {
      this.fromDate = this.datepipe.transform(new Date(this.date.getFullYear(), this.date.getMonth(), 1), 'yyyy-MM-dd');
      this.toDate = this.currentDate;
    } else if (val === 'lMonth') {
      this.toDate = this.datepipe.transform(new Date(this.date.getFullYear(), this.date.getMonth(), 0), 'yyyy-MM-dd');
      this.fromDate = this.datepipe.transform(new Date(this.date.getFullYear() - (this.date.getMonth() > 0 ? 0 : 1), (this.date.getMonth() - 1 + 12) % 12, 1), 'yyyy-MM-dd');
    } else if (val === 'cQuater') {
      this.fromDate = this.datepipe.transform(this.getCurrentPreviousQuarter("current").StartDate, 'yyyy-MM-dd');
      this.toDate = this.currentDate;
    } else if (val === 'lQuater') {
      this.fromDate = this.datepipe.transform(this.getCurrentPreviousQuarter("previous").StartDate, 'yyyy-MM-dd');
      this.toDate = this.datepipe.transform(this.getCurrentPreviousQuarter("previous").EndDate, 'yyyy-MM-dd');
    } else {
      this.fromDate = '';
      this.toDate = '';
    }
  }
}
