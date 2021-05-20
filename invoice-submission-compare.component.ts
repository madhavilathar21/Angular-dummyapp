import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-invoice-submission-compare',
  templateUrl: './invoice-submission-compare.component.html',
  styleUrls: ['./invoice-submission-compare.component.css']
})
export class InvoiceSubmissionCompareComponent implements OnInit {
  data: any;
  chartLastOptions: any;
  highcharts = Highcharts;
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
        type: "line"
      },
      colors: ['#3D7CC9', '#4FC982'],
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ["Jan'20", "Feb'20", "Mar'20", "Apr'20", "May'20", "Jun'20"]
      },
      yAxis: {
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
      series: seriesData
    };
  }
}
