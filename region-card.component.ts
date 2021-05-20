import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.css']
})
export class RegionCardComponent implements OnInit {
  constructor(private router: Router, private commonService: CommonService) {
  }
  ngOnInit() { }
  openp2p(val) {
    this.router.navigateByUrl('/mainPage');
    this.commonService.setRegionName(val);
  }
}
