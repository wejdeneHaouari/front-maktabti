import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthGuard} from './_guards/auth.guard';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {TablesComponent} from './pages/tables/tables.component';
import {IconsComponent} from './pages/icons/icons.component';
import {MapsComponent} from './pages/maps/maps.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {CreateBookComponent} from './books/create-book/create-book.component';
import {ListBookComponent} from './books/list-book/list-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard',      component: DashboardComponent,  canActivate: [AuthGuard] },
      { path: 'user-profile',   component: UserProfileComponent,  canActivate: [AuthGuard]},
      { path: 'tables',         component: TablesComponent,  canActivate: [AuthGuard] },
      { path: 'icons',          component: IconsComponent,  canActivate: [AuthGuard] },
      { path: 'maps',           component: MapsComponent,  canActivate: [AuthGuard] },
      { path: 'create-book',     component: CreateBookComponent,  canActivate: [AuthGuard] },
      {path: 'list-book', component: ListBookComponent, canActivate: [AuthGuard]}
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login',          component: LoginComponent },
      { path: 'register',       component: RegisterComponent }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
