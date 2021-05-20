import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  display: boolean = false;
  displayQuery: boolean = false;
  downloadDisplay: boolean = false;
  period;
  tempRegionValue;
  regionValue;

  constructor(private router: Router, private commonService: CommonService) {
    this.tempRegionValue = this.commonService.getRegionName();
    if (this.tempRegionValue == '' || this.tempRegionValue == undefined) {
      this.commonService.setRegionName("All Regions");
      this.tempRegionValue = this.commonService.getRegionName();
    }
    this.regionValue = this.tempRegionValue;
  }

  ngOnInit() {
    // this.tempRegionValue = this.commonService.getRegionName();
    // if (this.tempRegionValue == '' || this.tempRegionValue == undefined) {
    //   this.commonService.setRegionName("All Regions");
    //   this.regionValue = this.commonService.getRegionName();
    // }
    // this.regionValue = this.tempRegionValue;
  }
  backToHome() {
    this.router.navigateByUrl('/regionWise');
  }
  showDialog(val) {
    this.display = true;
    this.period = val;
  }
  showFilterBox() {
    this.downloadDisplay = true;
  }
  showQueryPop() {
    this.displayQuery = true;
  }
}
