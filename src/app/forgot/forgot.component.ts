import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: [ './forgot.component.scss' ]
})
export class ForgotComponent implements OnInit {
	constructor(private http: HttpClient) {}

	change() {
		this.http.get('http://localhost:3000/api/activate').subscribe((v) => console.log(v), (err) => console.log(err));
	}
	ngOnInit(): void {}
}
