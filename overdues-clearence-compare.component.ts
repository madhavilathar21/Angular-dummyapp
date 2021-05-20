import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-overdues-clearence-compare',
  templateUrl: './overdues-clearence-compare.component.html',
  styleUrls: ['./overdues-clearence-compare.component.css']
})
export class OverduesClearenceCompareComponent implements OnInit {
  display: boolean = false;
  data: any;
  highcharts: any = Highcharts;
  chartOptions: any;

  constructor(public dataFetchService: DataFetchService) { }

  ngOnInit() {
    this.dataFetchService.getPaymentComapre().subscribe(data => {
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
      colors: ['#3D7CC9', '#4FC982'],
      title: {
        text: ""
      },
      xAxis: {
        categories: ["Jan'20", "Feb'20", "Mar'20", "Apr'20", "May'20", "Jun'20"]
      },
      yAxis: {
        min: 0,
        title: {
          text: "Amount $(M)"
        }
      },
      legend: {
        itemStyle: {
          fontSize: '8px',
          font: '8pt Trebuchet MS, Verdana, sans-serif',
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }, series: {
          pointWidth: 15
        }
      },
      series: seriesData
    };
  }
}
