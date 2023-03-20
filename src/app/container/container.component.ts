import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public sidebarShow: boolean = false;
  public moveSideNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeLayout() {
    this.sidebarShow = !this.sidebarShow;
    this.moveSideNav = !this.moveSideNav;
  }

}
