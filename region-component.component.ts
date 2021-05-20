import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-region-component',
  templateUrl: './region-component.component.html',
  styleUrls: ['./region-component.component.css']
})
export class RegionComponentComponent implements AfterViewInit {
  private map;
  regionVal: String;

  constructor(private router: Router, private commonService: CommonService) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  allRegion() {
    this.router.navigateByUrl('/mainPage');
    this.commonService.setRegionName("All Region")
  }

  private initMap(): void {
    this.map = L.map('map', {
      crs: L.CRS.Simple
    });
    var imageUrl = 'assets/images/map.png';
    var imageBounds = [[0, 0], [240, 910]]
    const tiles = L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
    this.map.fitBounds(imageBounds);
    this.map.setMaxBounds(imageBounds);
    // this.map.on('click', function (e) {
    //   console.log(e.latlng.lat.toFixed(2) + "," + e.latlng.lng.toFixed(2));
    // })
    var apacIcon = L.icon({
      iconUrl: 'assets/images/Union_27.png',
      iconSize: [50, 50],
      // iconAnchor: [15, 25],
      // popupAnchor: [1, -34],
      // tooltipAnchor: [19, -12]
    })
    var eygptIcon = L.icon({
      iconUrl: 'assets/images/Union_22.png',
      iconSize: [50, 50],
      // iconAnchor: [15, 25],
      // popupAnchor: [1, -34],
      // tooltipAnchor: [19, -12]
    })
    var euroIcon = L.icon({
      iconUrl: 'assets/images/Union_29.png',
      iconSize: [50, 50],
      // iconAnchor: [15, 25],
      // popupAnchor: [1, -34],
      // tooltipAnchor: [19, -12]
    })
    var indiaIcon = L.icon({
      iconUrl: 'assets/images/Union_24.png',
      iconSize: [50, 50],
      // iconAnchor: [15, 25],
      // popupAnchor: [1, -34],
      // tooltipAnchor: [19, -12]
    })
    var usCanIcon = L.icon({
      iconUrl: 'assets/images/Union_28.png',
      iconSize: [50, 50],
      // iconAnchor: [15, 25],
      // popupAnchor: [1, -34],
      // tooltipAnchor: [19, -12]
    })
    var ssaIcon = L.icon({
      iconUrl: 'assets/images/Union_23.png',
      iconSize: [50, 50],
      // iconAnchor: [15, 25],
      // popupAnchor: [1, -34],
      // tooltipAnchor: [19, -12]
    })
    var uscIcon = L.icon({
      iconUrl: 'assets/images/Union_26.png',
      iconSize: [50, 50],
      // iconAnchor: [15, 25],
      // popupAnchor: [1, -34],
      // tooltipAnchor: [19, -12]
    })
    L.marker([195.00, 668.00], { icon: apacIcon }).on('click', () => { this.router.navigateByUrl('/mainPage'); this.commonService.setRegionName("APAC") }).addTo(this.map).bindTooltip('<h2> APAC </h2>')
    L.marker([163.00, 160.00], { icon: eygptIcon }).on('click', () => { this.router.navigateByUrl('/mainPage'); this.commonService.setRegionName("Egypt") }).addTo(this.map).bindTooltip('<h2> Egypt </h2>')
    L.marker([55.00, 264.00], { icon: euroIcon }).on('click', () => { this.router.navigateByUrl('/mainPage'); this.commonService.setRegionName("Europe") }).addTo(this.map).bindTooltip('<h2> Europe </h2>')
    L.marker([129.00, 616.00], { icon: indiaIcon }).on('click', () => { this.router.navigateByUrl('/mainPage'); this.commonService.setRegionName("India") }).addTo(this.map).bindTooltip('<h2> India </h2>')
    L.marker([136.00, 473.00], { icon: usCanIcon }).on('click', () => { this.router.navigateByUrl('/mainPage'); this.commonService.setRegionName("US & Canada") }).addTo(this.map).bindTooltip('<h2> US & Canada </h2>')
    L.marker([90.00, 478.00], { icon: ssaIcon }).on('click', () => { this.router.navigateByUrl('/mainPage'); this.commonService.setRegionName("SSA") }).addTo(this.map).bindTooltip('<h2> SSA </h2>')
    L.marker([179.00, 470.00], { icon: uscIcon }).on('click', () => { this.router.navigateByUrl('/mainPage'); this.commonService.setRegionName("US & Cincinati") }).addTo(this.map).bindTooltip('<h2> US & Cincinati </h2>')
    tiles.addTo(this.map);
  }

}