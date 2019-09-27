import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  GetMenu(): any[]{
    return [
      {text:'Home', link: '/welcome'},
      {text:'UK', link: '/uk'},
      {text:'Business', link: '/business'},
      {text:'Politics', link: '/politics'},
      {text:'Sport', link: '/sport'}
    ];
  }

}
