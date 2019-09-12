import { Injectable } from '@angular/core';
import { BusinessNews } from './business-news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor() { }

  GetNews<INews>() : Observable<INews[]>{
    return [author: 'Mick Farrow', article: 'Article'];
  }
}
