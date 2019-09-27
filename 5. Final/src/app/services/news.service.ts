import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { INewsItem } from '../pages/news-item';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  private newsUrl = 'api/news/news.json';

  constructor(private http: HttpClient) { }

  getNewsItems(): Observable<INewsItem[]> {
    return this.http.get<INewsItem[]>(this.newsUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getNewsItem(id: number): Observable<INewsItem | undefined> {
    return this.getNewsItems()
      .pipe(
        map((newsItems: INewsItem[]) => newsItems.find(n => n.id === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
