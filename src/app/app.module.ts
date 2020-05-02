import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UrlComponent } from './url/url.component';
import { NewUrlComponent } from './new-url/new-url.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LinkListComponent } from './link-list/link-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UrlComponent,
    NewUrlComponent,
    LinkListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 