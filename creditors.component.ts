import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-creditors',
  templateUrl: './creditors.component.html',
  styleUrls: ['./creditors.component.css']
})
export class CreditorsComponent implements OnInit {
  display: boolean = false;
  data: any;
  suppliers = [{ name: 'All', code: 'All' },
  { name: 'Supplier 1', code: 'Supplier 1' },
  { name: 'Supplier 2', code: 'Supplier 2' },
  { name: 'Supplier 3', code: 'Supplier 3' }]

  months = [{ name: '30 Days', code: '30 Days' },
  { name: '30-90 Days', code: '30-90 Days' },
  { name: '90-150 Days', code: '90-150 Days' }]
  highcharts = Highcharts;
  chartOptions: any;

  constructor(public dataFetchService: DataFetchService) { }

  ngOnInit() {
    this.dataFetchService.getCreditors3Months().subscribe(data => {
      this.setChartOptions(data);
    });
  }
  setChartOptions(seriesData) {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      colors: ['#4DD8FF', '#FFAF26'],
      title: {
        text: ""
      },
      xAxis: {
        categories: ["ZEPHIR S.p.A", "Shanghai Electrical", "Hite Company", "FLEXA GmbH", "EIS, Inc.", "Clearfield, Inc.", "Lectromat, Inc.", "Von Roll USA Inc", "Pittsburgh Electrical Ins. Inc.", "Lewis-Goetz & Company, Inc."]  },
      yAxis: [{
        min: 0,
        title: {
          text: 'Inovice Count'
        }
      }, {
        title: {
          text: 'Invoice Amount $(M)'
        },
        opposite: true
      }],
      legend: {
        itemStyle: {
          fontSize: '8px',
          font: '8pt Trebuchet MS, Verdana, sans-serif',
          //  color: '#A0A0A0'
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }, series: {
          pointWidth: 15
        }
      },
      series: seriesData
    };
  }
  showDialog() {
    this.display = true;
  }
}
