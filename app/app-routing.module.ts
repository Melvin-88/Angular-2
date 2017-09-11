import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home';
import {Auth} from './auth/auth';
import { AuthGuard } from './guards/loggedin.guard';


const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'login', component: Auth},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}