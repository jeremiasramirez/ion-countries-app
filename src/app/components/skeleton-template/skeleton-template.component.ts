import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-skeleton-template',
  templateUrl: './skeleton-template.component.html',
  styleUrls: ['./skeleton-template.component.scss'],
})
export class SkeletonTemplateComponent implements OnInit {
  @Input() spinner;
  constructor() { }

  ngOnInit() {}

}
