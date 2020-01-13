import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  date = null;
  dateFormat = 'yyyy/MM/dd';
  constructor() { }

  ngOnInit() {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
