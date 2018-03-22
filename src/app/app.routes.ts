import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { RecoverPassComponent } from './components/recover-pass/recover-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { CreateTraingComponent } from './components/create-traing/create-traing.component';
import { AdminTraingComponent } from './components/create-traing/admin-traing/admin-traing.component';


const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'changePass', component: ChangePassComponent },
    { path: 'recoverPass', component: RecoverPassComponent },
    { path: 'dashBoard', component: DashboardComponent },
    { path: 'adminUser', component: AdminUserComponent },
    { path: 'createTraing', component: CreateTraingComponent },
    { path: 'adminTraing', component: AdminTraingComponent }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES);
