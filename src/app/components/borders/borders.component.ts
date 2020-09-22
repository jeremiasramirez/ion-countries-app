import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.scss'],
})
export class BordersComponent implements OnInit {
  @Input() showBorders:boolean;
  @Input() frontiers=[];
  
  constructor() { }

  ngOnInit() {}

}
