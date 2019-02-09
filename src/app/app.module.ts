import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MailGenComponent } from './mail-gen/mail-gen.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        MailGenComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
