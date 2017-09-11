import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import {todos} from './data';
import {Todo} from './todo';

@Injectable()

export class Todoservices {
    todos: Todo[] = todos;

    constructor(private http: Http){

    }

    getTodos(): Todo[]{
        return this.todos;
    }

    createtodo(title: string){
        let todo = new Todo(title);
        this.todos.push(todo);
    }
    deleteTodo(todo: Todo){
        let index = this.todos.indexOf(todo);
        if(index>-1){
            this.todos.splice(index,1);
        }
    }
    toggleTodo(todo: Todo){
        todo.completed = !todo.completed;
    }
}