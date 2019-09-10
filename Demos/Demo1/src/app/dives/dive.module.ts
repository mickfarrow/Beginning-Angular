import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DivesComponent } from './dives.component';
import { DiveDetailComponent } from './dive-detail.component';
//import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
//import { ProductDetailGuard } from './product-detail.guard';
import {SharedModule} from '../shared/shared-module';
import { NewDiveComponent } from './new-dive/new-dive.component'
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dives', component: DivesComponent },
      { path: 'dives/newdive', component: NewDiveComponent },
      {
        path: 'dives/:id',
        //canActivate: [ProductDetailGuard],
        component: DiveDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    DivesComponent,
    DiveDetailComponent,
    NewDiveComponent
  ]
})
export class DiveModule { }