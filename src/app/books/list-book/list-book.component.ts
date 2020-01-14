import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {API_URL, BOOK} from '../../globals/global-variables';
import {HttpParams} from '@angular/common/http';

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
  constructor(private crudService: CrudService) { }

  getBooks() {
    const params = new HttpParams().set('page', this.currentPage.toString())
      .set('size', this.sizePage.toString()).set('sort', this.sort.toString());
    this.crudService.getAll(API_URL + BOOK, params).subscribe(
      (response) => {
        this.books = response;
        console.log(this.books);
        this.currentPage = this.books.pageable.pageNumber + 1;
        console.log(this.books.pageable.pageNumber)
      },
      (error =>  {
        console.log(error);
      })
    );
  }
  ngOnInit() {
    this.currentPage = 1;
    this.sizePage = 5;
  this.getBooks();
  }

  paginate(page){
    this.currentPage = page - 1;
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
}
