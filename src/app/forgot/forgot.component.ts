import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: [ './forgot.component.scss' ]
})
export class ForgotComponent implements OnInit {
	constructor(private http: HttpClient, private toastr: ToastrService) {}
	email = new FormControl('', Validators.required);
	change() {
		if (this.email.valid)
			this.http
				.post('https://urlshortener-backend.herokuapp.com/api/forgot', { email: this.email.value })
				.subscribe(
					(v) => this.toastr.success(v['msg'], 'check mail'),
					(err) => this.toastr.error(err['error']['msg'])
				);
		else this.toastr.warning('must enter email');
	}
	ngOnInit(): void {}
}
