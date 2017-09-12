import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdMenuModule} from '@angular/material';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TodoFormComponent} from './todo-form/todo-form';
import {TodoListComponent} from './todo-list/todo-list';
import {TodoItemComponent} from './todo-item/todo-item';
import {HomeComponent} from './home/home';
import {NavigationComponent} from './navigation/navigation';
import {MainListComponent} from './main-list/main-list';

import {Todoservices} from './shared/services';
import {Loginservices} from './shared/services-login';
import {Mainservices} from './shared/services-main';

import { AuthGuard } from './guards/loggedin.guard';
import { Auth } from './auth/auth';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AppRoutingModule,
        MdMenuModule,
        BrowserAnimationsModule
    ],
    declarations:[
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent,
        NavigationComponent,
        HomeComponent,
        MainListComponent,
        Auth
    ],
    providers: [
        Todoservices,
        AuthGuard,
        Loginservices,
        Mainservices
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}