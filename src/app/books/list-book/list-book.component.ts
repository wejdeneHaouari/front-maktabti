import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {API_URL, BOOK} from '../../globals/global-variables';
import {HttpParams} from '@angular/common/http';
import {BookSubject} from '../../_models/enum/bookSubject';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: ListReq<Book>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  isVisible = false;
  categories = BookSubject;
  selectedCategory = 'ALL';
  constructor(private crudService: CrudService) { }

  getBooks() {
    let params: any;
    const selectedPage = this.currentPage - 1;
    if (this.selectedCategory !== 'ALL') {

      params = new HttpParams().set('page', selectedPage.toString())
        .set('size', this.sizePage.toString()).set('sort', this.sort.toString()).set('genre', this.selectedCategory);
    } else {
      params = new HttpParams().set('page', selectedPage.toString())
        .set('size', this.sizePage.toString()).set('sort', this.sort.toString());
    }
    console.log(params)
    this.crudService.getAll(API_URL + BOOK, params).subscribe(
      (response) => {
        this.books = response;
        console.log(this.books);
        this.currentPage = this.books.pageable.pageNumber + 1;
        console.log(this.books.pageable.pageNumber);
      },
      (error =>  {
        console.log(error);
      })
    );
  }
  ngOnInit() {
    this.currentPage = 1;
    this.sizePage = 6;
    this.selectedCategory = 'ALL';
  this.getBooks();
  }

  paginate(page) {
    this.currentPage = page ;
    this.getBooks();
  }
  addToCard(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  selectCategorty(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    console.log(this.selectedCategory)
    this.getBooks();
  }

  onSort(event) {
    this.currentPage = 1;
    this.sort = event.target.value;
    this.getBooks();
  }
}
