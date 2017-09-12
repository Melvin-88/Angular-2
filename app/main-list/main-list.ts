import {Component, OnInit} from '@angular/core';
import {Mainservices} from '../shared/services-main';


@Component({
    selector: 'main-list',
    templateUrl: './app/main-list/main-list.html',
    styleUrls: ['./app/main-list/main-list.css']
})

export class MainListComponent {
    regions:any;
    crops:any;
    counteragents:any;
    districts:any;

    constructor(private mainService: Mainservices){
        this.regions=[];
        this.crops=[];
        this.counteragents=[];
        this.districts=[];
    }

    ngOnInit(){
        this.mainService.getRegion().subscribe((regions) => {
            this.regions = regions;
        });
        this.mainService.getCrops().subscribe((crops) => {
            this.crops = crops;
        });
        this.mainService.getCounteragents().subscribe((counteragents) => {
            this.counteragents = counteragents.results;
        });
        this.mainService.getDistricts().subscribe((districts) => {
            this.districts = districts;
        });
    }
    dataActual(counteragent: any){
        console.log(this.districts);
        let output:any = {
            date_now: '',
            next_date: '',
            region: '',
            district: ''
        };
        output.region = this.regions.filter((e)=>{
            return Number(counteragent.region) == Number(e.id)
        })[0].name;

        output.district = this.districts ? this.districts.filter((e)=>{
            return Number(counteragent.district) == Number(e.id)
        })[0].name : '';
            
        console.log(output);
        return output;
    }
}