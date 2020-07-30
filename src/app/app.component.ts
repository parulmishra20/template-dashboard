import { NgModule, Component, ViewChild } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  infoCards = [
    { name: "No of Tickets open", value: "10" },
    { name: "No of Tickets Resolved", value: "20" },
    { name: "No of Tickets In Progress", value: "30" }
  ];
  contentCards = [
    { name: "Snow Details" },
    { name: "Cisco Details" },
    
  ];

  inDropdown = [];

  ngOnInit() {}
}
