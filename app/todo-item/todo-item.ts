import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../shared/todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo-item/todo-item.html'
})

export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onDelete(){
        this.delete.emit(this.todo);
    }
    onToggle(){
        this.toggle.emit(this.todo);
    }
}