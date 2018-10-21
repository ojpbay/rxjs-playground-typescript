import { Component, OnInit } from '@angular/core';

import { allBooks, allReaders } from './data';

import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-playground-typescript';
  allBooks$: Observable<any>;

  ngOnInit(): void {
    this.allBooks$ = of(allBooks);

    this.allBooks$.subscribe(val => console.log(val));
  }
}
