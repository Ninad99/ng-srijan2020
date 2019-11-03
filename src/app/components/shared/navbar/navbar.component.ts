import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  checkbox: HTMLInputElement;

  @Output() navOpened = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.checkbox = document.getElementById('navi-toggle') as HTMLInputElement;
  }

  navOpen() {
    this.navOpened.emit('nav opened!');
  }

  navLinkClicked(routeName: string) {
    this.checkbox.checked = false;
  }

}
