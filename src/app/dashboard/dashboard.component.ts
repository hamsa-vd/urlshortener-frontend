import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
	constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) {}
	urls = [];
	username: string;
	fullurl = new FormControl('', Validators.required);
	dashHeaders = new HttpHeaders();
	ngOnInit(): void {
		this.username = localStorage.getItem('username');
		this.http
			.get('http://localhost:3000/api/geturls', {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
			})
			.subscribe(
				(v) => {
					this.urls = v['data'];
					console.log(this.urls);
				},
				(err) => this.toastr.info(err.error['msg'])
			);
	}

	shorten() {
		this.http
			.post(
				'http://localhost:3000/api/posturls',
				{ fullurl: this.fullurl.value },
				{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
			)
			.subscribe((v) => (this.urls = v['data']));
	}

	logout() {
		localStorage.removeItem('username');
		localStorage.removeItem('token');
		this.router.navigate([ '' ]);
	}
}
