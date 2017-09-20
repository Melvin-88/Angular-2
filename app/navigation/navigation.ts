import {Component, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'navigation',
    templateUrl: './app/navigation/navigation.html',
    outputs: ['open']
})

export class NavigationComponent {
    @Output() open = new EventEmitter();

    onOpen(){
        this.open.emit();
    }
}