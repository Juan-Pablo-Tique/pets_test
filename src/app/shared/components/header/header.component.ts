import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navMenuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNavMenu():void {
    this.navMenuStatus = !this.navMenuStatus;
  }

}
