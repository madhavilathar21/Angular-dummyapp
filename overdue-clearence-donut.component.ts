import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-overdue-clearence-donut',
  templateUrl: './overdue-clearence-donut.component.html',
  styleUrls: ['./overdue-clearence-donut.component.css']
})
export class OverdueClearenceDonutComponent implements OnInit {
  data: any;

  highcharts = Highcharts;
  chartOptions: any;
  constructor(public dataFetchService: DataFetchService) { }

  ngOnInit() {
    this.dataFetchService.getOverdueClearanceDonut().subscribe(data => {
      this.setChartOptions(data);

    })

  }

  setChartOptions(seriesData: any) {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      credits: {
        enabled: false
      },
      colors: ['#4DD8FF', '#3D7CC9', '#FF473E'],
      title: {
        text: "<label style='Font-weight: 700; font-size: 15px;'>227</label><br>M",
        align: 'center',
        verticalAlign: 'middle',
        y: -17
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          startAngle: -180,
          endAngle: 180,
          center: ['50%', '40%'],
          size: '110%'
        }
      },
      legend: {
        itemStyle: {
          fontSize: '8px',
          font: '8pt Trebuchet MS, Verdana, sans-serif'
        }
      },
      exporting: {
        enabled: false
      },
      series: [{
        type: 'pie',
        name: '',
        innerSize: '80%',
        data: seriesData
      }]
    }
  }


}
