import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthRoutingModule
    ],
    providers: []
})

export class AuthModule {

}