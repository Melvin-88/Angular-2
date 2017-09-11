import {Component} from '@angular/core';

import {Loginservices} from '../shared/services-login';

@Component({
    selector: 'auth',
    templateUrl: './app/auth/auth.html',
    styleUrls: ['./app/auth/auth.css']
})

export class Auth {
    login_username: string = '';
    login_password: string = '';

    constructor(private loginService: Loginservices){}

    onSubmit(){
        this.loginService.createlogin(this.login_username, this.login_password)
    }
}