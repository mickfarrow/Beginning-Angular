import { Component } from "@angular/core";
import { MenuService } from './menu.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  pageTitle = 'Demo Angular Application';
  menuItems : any[] = [];

  constructor(menuService: MenuService){
    this.menuItems = menuService.GetMenu();
  }
}
