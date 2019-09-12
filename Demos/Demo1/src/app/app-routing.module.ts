import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { UnitedkingdomComponent } from './unitedkingdom/unitedkingdom.component';
import { BusinessComponent } from './business/business.component';
import { SportComponent } from './sport/sport.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PoliticsComponent } from './politics/politics.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'uk', component: UnitedkingdomComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'sport', component: SportComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
