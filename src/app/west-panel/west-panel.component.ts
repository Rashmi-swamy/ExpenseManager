import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-west-panel',
  templateUrl: './west-panel.component.html',
  styleUrls: ['./west-panel.component.css']
})
export class WestPanelComponent implements OnInit {
listOfGroup=['Group-1','Group-2','Group-3','Group-4'];
  constructor() { }

  ngOnInit() {
  }

}
