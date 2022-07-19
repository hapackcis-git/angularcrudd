import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule} from'@angular/material/toolbar';
import{MatSidenavModule} from'@angular/material/sidenav';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import{MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './sharedcomponent/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { SearchfilterPipe } from './searchfilter.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CarsComponent } from './cars/cars.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SearchfilterPipe,
    AboutComponent,
    ContactComponent,
    CarsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
