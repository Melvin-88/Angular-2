import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {ROOT_URL} from './constants';
import { Router } from '@angular/router';

@Injectable()

export class Loginservices {

    constructor(private http: Http, private router: Router){

    }

    createlogin(login_username: string, login_password: string){
        let body = {
            "password": login_password,
            "email": login_username
        };
        this.http.post(ROOT_URL+'/v0/login', body).subscribe(data => {
            if(data['_body'] && data['_body'] != ''){
                sessionStorage.setItem('token', JSON.parse(data['_body']).token);
                this.router.navigate(['/']);
            }
        });
    }
}