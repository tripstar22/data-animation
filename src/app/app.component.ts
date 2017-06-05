import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'da-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'da works!';
	data: FirebaseListObservable<any[]>;

	constructor(db: AngularFireDatabase) {
		this.data = db.list('/data');
	}

	ngOnInit() {

	}
}
