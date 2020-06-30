import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onNavbarClicked = new EventEmitter<string>();


  currentTab:string = "recipe";
  constructor() {
  }

  ngOnInit(): void {
    this.onNavbarClicked.emit(this.currentTab)
  }

  tabChanged(tab:string){
    this.onNavbarClicked.emit(tab);
    this.currentTab = tab;
  }
}
