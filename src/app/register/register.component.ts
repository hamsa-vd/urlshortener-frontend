import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private toastr: ToastrService,
		private router: Router
	) {}
	userdata: FormGroup;
	ngOnInit(): void {
		this.userdata = this.fb.group({
			username: [ '', Validators.required ],
			email: [ '', Validators.required ],
			password: [ '', Validators.required ],
			checkPassword: [ '', Validators.required ]
		});
	}
	sendform() {
		console.log(this.userdata.value);
		if (this.userdata.valid) {
			console.log(this.userdata.get('password'));
			let body = this.userdata.value;
			delete body['checkPassword'];
			if (this.userdata.get('password').value == this.userdata.get('checkPassword').value)
				this.http.post('https://urlshortener-backend.herokuapp.com/api/register', body).subscribe(
					(v) => {
						this.router.navigate([ 'login' ]);
						this.toastr.success('check your mail', 'activate account');
					},
					(err) => console.log(err)
				);
			else this.toastr.error("Passwords didn't match");
		} else this.toastr.warning('All Fields are required');
	}
}
