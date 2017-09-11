import {Component, OnInit} from '@angular/core';

import {Todo} from '../shared/todo';
import {Todoservices} from '../shared/services';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.html'
})

export class TodoListComponent implements OnInit{
    todos: Todo[];

    constructor(private todoService: Todoservices){
        this.todos = [];
    }

    ngOnInit(){
        this.todos = this.todoService.getTodos();
    }

    delete(todo: Todo){
        this.todoService.deleteTodo(todo)
    }

    toggle(todo: Todo){
        this.todoService.toggleTodo(todo)
    }
}