import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-chart',
  templateUrl: './region-chart.component.html',
  styleUrls: ['./region-chart.component.css']
})
export class RegionChartComponent implements OnInit {
  complWidth;
  pendWidth;
  notComplWidth;
  totalVal = 994;
  complVal = 744;
  pendVal = 150;
  notComplVal = 100;

  constructor() { }

  ngOnInit() {
    this.complWidth = (this.complVal / this.totalVal) * 100;
    this.pendWidth = (this.pendVal / this.totalVal) * 100;
    this.notComplWidth = (this.notComplVal / this.totalVal) * 100;
  }

}
