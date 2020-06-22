import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-activate',
	templateUrl: './activate.component.html',
	styleUrls: [ './activate.component.scss' ]
})
export class ActivateComponent implements OnInit {
	constructor(private http: HttpClient, private route: ActivatedRoute, private toastr: ToastrService) {}

	ngOnInit(): void {
		const id = this.route.params['value']['id'];
		this.http
			.get(`http://localhost:3000/api/activate/${id}`)
			.subscribe((v) => this.toastr.success(v['msg']), (err) => this.toastr.error(err.error['msg']));
	}
}
