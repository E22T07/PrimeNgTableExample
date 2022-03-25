import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-prime-ng-table',
  templateUrl: './demo-prime-ng-table.component.html',
  styleUrls: ['./demo-prime-ng-table.component.scss']
})
export class DemoPrimeNgTableComponent implements OnInit {
  @Input() info!: any[];
  cols!: any[] ;

  constructor() { }

  ngOnInit(): void {
  this.cols = [
    {field:'guid',header:'Personal ID'},
    {field:'name',header:'Name'},
    {field:'isActive',header:'Active'},
    {field:'gender',header:'Gender'},
    {field:'company',header:'Company'},
    {field:'age',header:'Age'},
    {field:'balance',header:'Balance'},
    {field:'email',header:'Email'},
    {field:'phone',header:'Phone'},
    {field:'country',header:'Country'},
    {field:'state',header:'State'},
    {field:'city',header:'City'},
    {field:'address',header:'Address'},
    {field:'latitude',header:'Latitude'},
    {field:'longitude',header:'Longitude'},
    {field:'greeting',header:'Greeting'},
    {field:'favoriteFruit',header:'Favorite Fruit'}
  ]
  }

}
