import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MailGenComponent } from './mail-gen/mail-gen.component';
import { LoginComponent } from './login/login.component';
import { ExcelService } from './mail-gen/xlsx-exporter.service';

@NgModule({
    declarations: [
        AppComponent,
        MailGenComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [ExcelService],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
