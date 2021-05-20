import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-query-table',
  templateUrl: './query-table.component.html',
  styleUrls: ['./query-table.component.css']
})
export class QueryTableComponent implements OnInit {
  sales: any[];

  lastYearTotal: number;
  thisYearTotal: number;
  constructor(public dataFetchService: DataFetchService) { }

  ngOnInit() {
    this.dataFetchService.getSales().subscribe(data => {
      this.sales = data;
      this.calculateLastYearTotal();
      this.calculateThisYearTotal();
    });
  }
  calculateLastYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.lastYearProfit;
    }

    this.lastYearTotal = total;
  }

  calculateThisYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.thisYearProfit;
    }

    this.thisYearTotal = total;
  }
}
