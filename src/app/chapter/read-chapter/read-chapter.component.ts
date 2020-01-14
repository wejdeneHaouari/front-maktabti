import {Component, OnInit} from '@angular/core';
import {API_URL, CREATE_CHAPTER} from '../../globals/global-variables';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute} from '@angular/router';
import {Chapter} from '../../_models/chapter';

@Component({
  selector: 'app-read-chapter',
  templateUrl: './read-chapter.component.html',
  styleUrls: ['./read-chapter.component.scss']
})
export class ReadChapterComponent implements OnInit {

  content: string;
  test: string;
  id: number;
  chapter: Chapter;

  constructor(private crudService: CrudService, private router: ActivatedRoute) {
    router.params.subscribe(params => {
      this.id = (params['param']);
    });
  }

  ngOnInit() {
    this.crudService.getOne(API_URL + CREATE_CHAPTER, this.id).subscribe(
      (response) => {
        this.chapter = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
