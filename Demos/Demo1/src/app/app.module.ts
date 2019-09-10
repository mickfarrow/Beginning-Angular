import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DiversComponent } from './divers/divers.component';
import { LocationsComponent } from './locations/locations.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { SettingsComponent } from './settings/settings.component';
import { DiveModule } from './dives/dive.module';
import { SharedModule } from './shared/shared-module';
import { MarinelifeComponent } from './marinelife/marinelife.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, DiveModule, SharedModule, RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'marinelife', component: MarinelifeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }])
  ],
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, 
  DiversComponent, LocationsComponent, WelcomeComponent, SettingsComponent, MarinelifeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
