import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/module/material/material.module';
import { EditorComponent } from './features/editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';
import { LandingComponent } from './features/landing/landing.component';
import { LoggerService } from './service/logger.service';
import { NewLoginComponent } from './features/login/new-login/new-login.component';
import { ExistingLoginComponent } from './features/login/existing-login/existing-login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownExtModule } from './common/module/markdown-ext/markdown-ext.module';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    NavbarComponent,
    LoginComponent,
    LandingComponent,
    NewLoginComponent,
    ExistingLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownExtModule,
    AutosizeModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
