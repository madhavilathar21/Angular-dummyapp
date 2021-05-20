import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  regionName: String;
  constructor() { }
  setRegionName(val) {
    this.regionName = val;
    return this.regionName;
  }

  getRegionName() {
    return this.regionName;
  }
}
