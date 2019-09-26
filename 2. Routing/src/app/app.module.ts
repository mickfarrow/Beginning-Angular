import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { SportComponent } from './sport/sport.component';
import { UnitedkingdomComponent } from './unitedkingdom/unitedkingdom.component';
import { BusinessComponent } from './business/business.component';
import { PoliticsComponent } from './politics/politics.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, WelcomeComponent, SportComponent, UnitedkingdomComponent, BusinessComponent, PoliticsComponent, PagenotfoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
