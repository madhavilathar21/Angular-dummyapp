import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { DataFetchService } from '../../services/data-fetch.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let gauge = require('highcharts/modules/solid-gauge');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
gauge(Highcharts);

@Component({
  selector: 'app-overdues',
  templateUrl: './overdues.component.html',
  styleUrls: ['./overdues.component.css']
})
export class OverduesComponent implements OnInit {
  display: boolean = false;
  highcharts = Highcharts;
  chartOptions: any;
  months = [{ name: '3 Months', code: '3 Months' },
  { name: '6 Months', code: '6 Months' },
  { name: 'Weekly', code: 'Weekly' },
  { name: 'YTD', code: 'YTD' }]
  data: any;

  constructor(public DataFetchService: DataFetchService) { }

  ngOnInit() {
    this.DataFetchService.getPaymentsRejected3Months().subscribe(data => this.setChartOptions(data));
  }
  setChartOptions(seriesData: any) {
    this.chartOptions = {
      chart: {
        type: 'solidgauge'
      },
      title: {
        text: "<label style='Font-weight: 700; font-size: 30px;'>227</label><br>M",
        align: 'center',
        verticalAlign: 'middle',
        y: 20
      },
      colors: ['#4DD8FF', '#3D7CC9', '#FF473E'],
      credits: {
        enabled: false
      },
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'grey'
        }
      },
      legend: {
        enabled: true,
        itemStyle: {
          fontSize: '8px',
          font: '8pt Trebuchet MS, Verdana, sans-serif',
          //  color: '#A0A0A0'
        }
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          linecap: 'round',
          stickyTracking: false,
          rounded: true
        }
      },
      series: seriesData
    };
  };

  showDialog() {
    this.display = true;
  }
}
