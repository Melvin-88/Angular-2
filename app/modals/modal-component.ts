import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './app/modals/modal.html',
})
export class NgbdModalContent {
    @Input() name:any;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'ngbd-modal-component',
    templateUrl: './app/modals/modal-component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}

    openHome() {
        const modalRef = this.modalService.open(NgbdModalContent);
    }
}