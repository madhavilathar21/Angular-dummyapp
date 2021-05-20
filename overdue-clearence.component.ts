import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-overdue-clearence',
  templateUrl: './overdue-clearence.component.html',
  styleUrls: ['./overdue-clearence.component.css']
})
export class OverdueClearenceComponent implements OnInit {
  display: boolean = false;
  data: any;
  highcharts: any = Highcharts;
  chartOptions: any;

  months = [{ name: '3 Months', code: '3 Months' },
  { name: '6 Months', code: '6 Months' },
  { name: 'Weekly', code: 'Weekly' },
  { name: 'YTD', code: 'YTD' }]

  constructor(public dataFetchService: DataFetchService) { }

  ngOnInit() {
    this.dataFetchService.getOverdueClearance3Months().subscribe(data => {
      this.setChartOptions(data);
    })
  }

  setChartOptions(seriesData) {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      colors: ['#4DD8FF', '#3D7CC9', '#FF473E'],
      title: {
        text: ""
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar"]
      },
      yAxis: {
        min: 0,
        title: {
          text: ""
        }
      },
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
