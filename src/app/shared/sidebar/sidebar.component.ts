import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class sidebarComponent implements OnInit {

  minimizedBar = false;


  constructor() { }

  ngOnInit(): void {
  }

  moveSidebar()
  {
      if(this.minimizedBar === false)
      {
        this.minimizedBar = true;
      } else{
        this.minimizedBar = false;
      }
  }



}
