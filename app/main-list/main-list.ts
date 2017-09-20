import {Component, Input} from '@angular/core';


@Component({
    selector: 'main-list',
    templateUrl: './app/main-list/main-list.html',
    styleUrls: ['./app/main-list/main-list.css']
})

export class MainListComponent {
    @Input() regions:any;
    @Input() crops:any;
    @Input() counteragents:any;
    @Input() districts:any;

    dataActual(counteragent: any){
        let output:any = {
            date_now: '',
            next_date: '',
            region: '',
            district: ''
        };
        output.region = this.regions.filter((e:any)=>{
            return Number(counteragent.region) == Number(e.id)
        })[0].name;

        output.district = this.districts ? this.districts.filter((e:any)=>{
            return Number(counteragent.district) == Number(e.id)
        })[0].name : '';

        return output;
    }
}