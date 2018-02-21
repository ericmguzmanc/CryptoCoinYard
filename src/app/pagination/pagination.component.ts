import { Component, OnInit, Input, OnChanges } from '@angular/core';
//using the tutorial from https://g00glen00b.be/pagination-component-angular-2/

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() offset: number = 0;
  @Input() limit: number = 1;
  @Input() size: number = 1;
  @Input() range: number = 3;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
