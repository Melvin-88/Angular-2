import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {ROOT_URL} from './constants';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class Mainservices {
    regions:any;
    crops:any;
    counteragents:any;
    district:any;

    constructor(private http: Http){
    }

    getRegion(): Observable<any>{
        let token: any = {
            headers: {
                'Authorization': 'Token ' + sessionStorage.token
            }
        };
        return this.http.get(ROOT_URL+'/v0/regions', token)
                 .map(res => res.json())
                 .map(regions => this.regions = regions)
                 .catch(this.handleError);
    }
    getDistricts(): Observable<any>{
        let token: any = {
            headers: {
                'Authorization': 'Token ' + sessionStorage.token
            }
        };
        return this.http.get(ROOT_URL+'/v0/districts', token)
            .map(res => res.json())
            .map(district => this.district = district)
            .catch(this.handleError);
    }
    getCrops(): Observable<any>{
        let token: any = {
            headers: {
                'Authorization': 'Token ' + sessionStorage.token
            }
        };
        return this.http.get(ROOT_URL+'/v0/crops', token)
            .map(res => res.json())
            .map(crops => this.crops = crops)
            .catch(this.handleError);
    }
    getCounteragents(): Observable<any>{
        let token: any = {
            headers: {
                'Authorization': 'Token ' + sessionStorage.token
            }
        };
        return this.http.get(ROOT_URL+'/v0/counteragents', token)
            .map(res => res.json())
            .map(counteragents => this.counteragents = counteragents)
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error)
    }
}