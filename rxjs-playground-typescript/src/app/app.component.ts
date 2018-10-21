import { Component, OnInit } from '@angular/core';

import { allBooks, allReaders, IBook, IReader } from './data';

import { Observable, of } from 'rxjs';
import { map, filter, tap, catchError } from 'rxjs/operators';

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

    // this.allBooks$.subscribe(val => console.log(val));

    const filteredBooks$ = this.allBooks$.pipe(
      catchError(val => of(`I caught: ${val}`)),
      // filter(book => book.publicationYeakkr > 1960),
      tap(newBook => console.log(`New book title: ${newBook.title}`))
    );

    filteredBooks$.subscribe(bk => console.log(bk));
  }
}
