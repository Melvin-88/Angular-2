import {Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {NgbdModalComponent} from '../modals/modal-component';
import {Mainservices} from '../shared/services-main';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.html',
    styleUrls: ['./app/home/home.css']
})

export class HomeComponent {
    @ViewChild(NgbdModalComponent) child:any;

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

    openModal(){
        this.child.openHome();
    }
}