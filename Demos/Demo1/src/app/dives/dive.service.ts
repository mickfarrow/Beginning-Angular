import { IDive } from "./dive";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DiveService {

  private apiUrl = 'http://localhost:58562/api/dive';
  constructor(private http: HttpClient) {
  }

  getDives(): Observable<IDive[]> {
    return this.http
    .get<IDive[]>(this.apiUrl)
    .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
  }

  getDive(id: number): Observable<IDive | undefined> {
    return this.getDives().pipe(
      map((dives: IDive[]) => dives.find(p => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ${err.error.message}';
    }
    else {
      errorMessage = 'Server returned code ' + err.status + ', error message is ' + err.message;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
