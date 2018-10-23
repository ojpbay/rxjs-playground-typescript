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
  allBooks$: Observable<IBook>;

  ngOnInit(): void {
    this.allBooks$ = Observable.create(subscriber => {
      for (const book of allBooks) {
        subscriber.next(book);
      }

      setTimeout(() => {
        subscriber.complete();
      }, 200);

      return;
    });

    const filteredBooks$ = this.allBooks$.pipe(
      catchError(val => of(`I caught: ${val}`)),
      filter(book => book.publicationYear > 1945),
      tap(newBook => console.log(`New book title: ${newBook.title}`))
    );

    filteredBooks$.subscribe(bk => console.log(bk));
  }
}
