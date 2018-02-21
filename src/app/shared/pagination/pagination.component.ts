import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toArray';
//using the tutorial from https://g00glen00b.be/pagination-component-angular-2/

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  /** 
   * @variable {number} offset - The offset that is used currntly
   * @variable {number} limit - The limit or size of each page (how many items)
   * @variable {number} size - The total amount of items within the collection.
   * @variable {number} range - range of available pages to show in our pagination component
   */
  @Input() offset: number = 0;
  @Input() limit: number = 1;
  @Input() size: number = 1;
  @Input() range: number = 3;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  /**
   * @variable {number} currentPage - current page on pagination component
   * @variable {number} totalPages - total pages the component will have, depend on the collection
   */
  currentPage: number;
  totalPages: number;
  pages: Observable<number[]>;
  // pageNumbers: number[];

  constructor() { }

  
  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }

  
  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
  }

  getPages(offset: number, limit: number, size: number): void { //to get page numbers
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = Observable.range(-this.range, this.range * 2 + 1)
      .map(offset => this.currentPage + offset)
      .filter(page => this.isValidPageNumber(page, this.totalPages))
      .toArray();
  }
  /**
   * Determining what the <<current page>> is based on the offset and the limit
   */
  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }
  /**
   * Determining what the <<total amount of pages>> is, based on the limit and the size
  */
  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  selectPage(page: number) {
    this.cancelEvent(event);
    if(this.isValidPageNumber(page, this.totalPages)){
      this.pageChange.emit((page - 1) * this.limit);
    };
  }

  cancelEvent(event){
    event.preventDefault();
  }

}
