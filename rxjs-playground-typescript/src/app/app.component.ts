import { Component, OnInit } from '@angular/core';

import { allBooks, allReaders, IBook, IReader } from './data';

import { Observable, of, from, fromEvent } from 'rxjs';
import { map, filter, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-playground-typescript';
  allBooks$: Observable<IBook>;

  ngOnInit(): void {
    this.allBooks$ = from<IBook>(allBooks);

    const filteredBooks$ = this.allBooks$.pipe(
      filter(book => book.publicationYear > 1945),
      tap(newBook => console.log(`New book title: ${newBook.title}`)),
      catchError(val => of(`I caught: ${val}`))
    );

    filteredBooks$.subscribe(bk => console.log(bk));
  }
}
