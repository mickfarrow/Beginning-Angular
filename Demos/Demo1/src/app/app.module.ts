import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { SportComponent } from './sport/sport.component';
import { UnitedkingdomComponent } from './unitedkingdom/unitedkingdom.component';
import { BusinessComponent } from './business/business.component';
import { PoliticsComponent } from './politics/politics.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'uk', component: UnitedkingdomComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'politics', component: PoliticsComponent },
    { path: 'sport', component: SportComponent },
    { path: 'pagenotfound', component: PagenotfoundComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }])
  ],
  declarations: [AppComponent, WelcomeComponent, SportComponent, UnitedkingdomComponent, BusinessComponent, PoliticsComponent, PagenotfoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
