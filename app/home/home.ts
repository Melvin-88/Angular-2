import {Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {NgbdModalComponent} from '../modals/modal-component';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.html',
    styleUrls: ['./app/home/home.css']
})

export class HomeComponent {
    @ViewChild(NgbdModalComponent) child;

    openModal(){
        this.child.openHome();
    }
}