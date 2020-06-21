import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateComponent } from './activate/activate.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'forgot',
		component: ForgotComponent
	},
	{
		path: 'passwordNew/:id',
		component: NewPasswordComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'activate/:id',
		component: ActivateComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
