import {Component} from '@angular/core';

import {Todoservices} from '../shared/services';

@Component({
    selector: 'todo',
    templateUrl: './app/todo-form/todo-form.html',
    styleUrls: ['./app/todo-form/todo-form.css']
})

export class TodoFormComponent {
    title: string = '';

    constructor(private todoService: Todoservices){}

    onSubmit(){
        this.todoService.createtodo(this.title)
    }
}