import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-west-panel',
  templateUrl: './west-panel.component.html',
  styleUrls: ['./west-panel.component.css']
})
export class WestPanelComponent implements OnInit {
listOfGroup=[{id:1,groupName:'Group-1'},{id:2,groupName:'Group-2'},
                {id:3,groupName:'Group-3'},
                { id:4,groupName:'Group-4'}];
    name: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public gotoGroupDetails(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
}
}
