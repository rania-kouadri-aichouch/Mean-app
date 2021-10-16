import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposentComponent } from './composent/composent.component';
import {FormsModule} from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import {S1Service} from './s1.service';
import { TestComponent } from './test/test.component';
import { Lien1Component } from './lien1/lien1.component';
import { Lien2Component } from './lien2/lien2.component';
import { Lien3Component } from './lien3/lien3.component';
import { PageIndexComponent } from './page-index/page-index.component';




@NgModule({
  declarations: [
    AppComponent,
    ComposentComponent,
    Page1Component,
    Page2Component,


    TestComponent,
    Lien1Component,
    Lien2Component,
    Lien3Component,
    Page3Component,
    PageIndexComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
