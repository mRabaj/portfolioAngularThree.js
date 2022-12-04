import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
//angular-Highcharts
import { ChartModule } from "angular-highcharts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesService } from './contact.service';
import { MatInputModule as MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatCheckboxModule as MatCheckboxModule } from '@angular/material/checkbox';

import { LibModule } from "./lib/lib.module";



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    ChartModule,
    LibModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage : 'en-US',
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
