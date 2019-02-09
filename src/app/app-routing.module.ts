import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailGenComponent } from './mail-gen/mail-gen.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: "mail_gen", component: MailGenComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
