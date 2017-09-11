import {Component} from '@angular/core';

import {todos} from './shared/data';
import {Todo} from './shared/todo';

@Component({
    selector: 'app',
    templateUrl: './template/app.component.html'
})

export class AppComponent{
    title: string = 'Angular 4';
}