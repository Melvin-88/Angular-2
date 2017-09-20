import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    template: `
        <div class="modal-header">
            <h4 class="modal-title">Hi there!</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Hello, 1231!</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
        </div>
    `
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