import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	constructor(private fb: FormBuilder, private http: HttpClient) {}
	userdata: FormGroup;
	ngOnInit(): void {
		this.userdata = this.fb.group({
			username: [ '', Validators.required ],
			email: [ '', Validators.required ],
			password: [ '', Validators.required ],
			checkPassword: [ '', Validators.required ]
		});
	}
	submit() {
		let body = this.userdata.value;
		delete body['checkPassword'];
		this.http.post('http://localhost:3000/api/register', body).subscribe((v) => {
			console.log('matter');
		});
	}
}
