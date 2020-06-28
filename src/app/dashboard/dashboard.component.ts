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
			.get('https://urlshortener-backend.herokuapp.com/api/geturls', {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
			})
			.subscribe(
				(v) => {
					this.urls = v['data'].map((e) => ({
						...e,
						shorturl: `https://urlshortener-backend.herokuapp.com/go/${e.shorturl}`
					}));
				},
				(err) => this.toastr.info(err.error['msg'])
			);
	}

	shorten() {
		this.http
			.post(
				'https://urlshortener-backend.herokuapp.com/api/posturls',
				{ fullurl: this.fullurl.value },
				{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
			)
			.subscribe(
				(v) =>
					(this.urls = v['data'].map((e) => ({
						...e,
						shorturl: `https://urlshortener-backend.herokuapp.com/go/${e.shorturl}`
					})))
			);
	}

	logout() {
		localStorage.removeItem('username');
		localStorage.removeItem('token');
		this.router.navigate([ '' ]);
	}
}
