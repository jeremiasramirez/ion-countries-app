import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-item',
  templateUrl: './each-item.component.html',
  styleUrls: ['./each-item.component.scss'],
})
export class EachItemComponent implements OnInit {
  @Input() data;
  @Input() key;
  constructor() { }

  ngOnInit() {}

}
