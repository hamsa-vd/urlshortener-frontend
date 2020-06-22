import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-new-password',
	templateUrl: './new-password.component.html',
	styleUrls: [ './new-password.component.scss' ]
})
export class NewPasswordComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private toastr: ToastrService,
		private route: ActivatedRoute,
		private router: Router
	) {}
	password = new FormControl('', Validators.required);
	checkpass = new FormControl('', Validators.required);
	ngOnInit(): void {}
	change() {
		const id = this.route.params['value']['id'];
		if (this.password.value && this.password.value == this.checkpass.value)
			this.http
				.post('http://localhost:3000/api/changepass', {
					password: this.password.value,
					id
				})
				.subscribe(
					(v) => {
						this.toastr.success(v['msg']);
						this.router.navigate([ 'login' ]);
					},
					(err) => this.toastr.error(err['error']['msg'])
				);
		else this.toastr.warning('passwords must match');
	}
}
