import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../app.service';
import { ExcelService } from './xlsx-exporter.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


@Component({
    selector: 'app-mail-gen',
    templateUrl: './mail-gen.component.html',
    styleUrls: ['./mail-gen.component.scss']
})
export class MailGenComponent implements OnInit {

    registrations: any;
    constructor(private appService: AppService, private excelService: ExcelService) { }

    ngOnInit() {
    }

    generate_ebay_accounts(): void {
        this.registrations = [];
        setTimeout(() => {
            this.registrations = [{
                "firstName": "Pramesh",
                "lastName": "Bajracharya",
                "email": "pe.messh@gmail.com",
                "password": "lets_not_try_this_21"
            }, {
                "firstName": "Pramesh",
                "lastName": "Bajracharya",
                "email": "pe.messh@gmail.com",
                "password": "lets_not_try_this_21"
            }];
        }, 4000)
        // this.appService.processRegistration().subscribe((data) => {
        //     console.log(data);
        // })
    }

    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.registrations, 'registrations');
    }

    exportAsCSV(): void {
        const head = ["firstName", "lastName", "email", "password"];
        new Angular2Csv(this.registrations, 'registrations', { headers: (head) });
    }

}
