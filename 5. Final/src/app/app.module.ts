import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './pages/home/welcome.component';
import { SportComponent } from './pages/sport/sport.component';
import { UnitedkingdomComponent } from './pages/unitedkingdom/unitedkingdom.component';
import { BusinessComponent } from './pages/business/business.component';
import { PoliticsComponent } from './pages/politics/politics.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, WelcomeComponent, SportComponent, UnitedkingdomComponent, BusinessComponent, PoliticsComponent, PagenotfoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
