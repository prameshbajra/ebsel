import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
    selector: 'app-mail-gen',
    templateUrl: './mail-gen.component.html',
    styleUrls: ['./mail-gen.component.scss']
})
export class MailGenComponent implements OnInit {

    constructor(private appService: AppService) { }

    ngOnInit() {
    }

    generate_ebay_accounts() {
        this.appService.processRegistration().subscribe((data) => {
            console.log(data);
        })
    }

}
