import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Input() length!: number;

  //pageSize

  pageSize: number = environment.PAGE_SIZE;
  currentPage: number = 0;
  pageIndex: number = 0;

  changePage(event: PageEvent): void {
    this.currentPage = event.pageIndex ?? 0;
    this.onChangePage.emit(this.currentPage);
  }
}
