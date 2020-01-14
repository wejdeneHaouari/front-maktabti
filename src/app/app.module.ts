import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import {ErrorInterceptor} from './_guards/error.interceptor';
import {JwtInterceptor} from './_guards/jwt.interceptor';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {TablesComponent} from './pages/tables/tables.component';
import {IconsComponent} from './pages/icons/icons.component';
import {MapsComponent} from './pages/maps/maps.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ClipboardModule} from 'ngx-clipboard';
import {CreateBookComponent} from './books/create-book/create-book.component';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import {EnumToArrayPipe} from './pipes/enum-to-array.pipe';
import {ListBookComponent} from './books/list-book/list-book.component';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {SharedModuleModule} from './_shared/shared-module/shared-module.module';
import {CheckoutComponent} from './payement/checkout/checkout.component';

registerLocaleData(en);


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ClipboardModule,
    ToastrModule.forRoot(),
    NgZorroAntdModule,
    NzPaginationModule,
    SharedModuleModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CreateBookComponent,
    EnumToArrayPipe,
    ListBookComponent,
    CheckoutComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: NZ_I18N, useValue: en_US},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
