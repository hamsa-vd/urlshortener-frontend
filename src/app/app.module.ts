import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivateComponent } from './activate/activate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginAuthGuard } from './login-auth.guard';
@NgModule({
	declarations: [
		AppComponent,
		ActivateComponent,
		DashboardComponent,
		ForgotComponent,
		HomeComponent,
		LoginComponent,
		NewPasswordComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot()
	],
	providers: [ LoginAuthGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
