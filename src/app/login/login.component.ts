import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private router: Router,
		private toastr: ToastrService
	) {}
	logindata: FormGroup;
	ngOnInit(): void {
		this.logindata = this.fb.group({
			username: [ '', Validators.required ],
			password: [ '', Validators.required ]
		});
	}

	sendloginform() {
		console.log(this.logindata.value);
		if (this.logindata.valid) {
			let body = this.logindata.value;
			this.http.post('https://urlshortener-backend.herokuapp.com/api/login', body).subscribe(
				(v) => {
					localStorage.setItem('token', v['data']['token']);
					localStorage.setItem('username', v['data']['username']);
					this.toastr.success(v['msg']);
					this.router.navigate([ 'dashboard' ]);
				},
				(err) => this.toastr.error(err.error.msg)
			);
		} else this.toastr.warning('All Fields are required');
	}
}
