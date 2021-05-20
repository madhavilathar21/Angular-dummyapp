import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avtar-box',
  templateUrl: './avtar-box.component.html',
  styleUrls: ['./avtar-box.component.css']
})
export class AvtarBoxComponent implements OnInit {
  down: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showLogout() {
    this.down = !this.down;
  }

  logout() {
    this.router.navigateByUrl('/');
  }
}
