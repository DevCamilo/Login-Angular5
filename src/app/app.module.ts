// Providers
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RecoverPassComponent } from './components/recover-pass/recover-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideVarComponent } from './components/side-var/side-var.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { CreateTraingComponent } from './components/create-traing/create-traing.component';
import { AdminTraingComponent } from './components/create-traing/admin-traing/admin-traing.component';

// Services
import { CrudService } from './providers/crud.service';
import { CrudTraingService } from './providers/crud-traing.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePassComponent,
    NavBarComponent,
    RecoverPassComponent,
    DashboardComponent,
    SideVarComponent,
    AdminUserComponent,
    CreateTraingComponent,
    AdminTraingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    NgxPaginationModule
  ],
  providers: [
    CrudService,
    CrudTraingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
