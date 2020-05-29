import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

/**
 * Service for alerts
 */
@Injectable()
export class AlertService {

	private nextAlert = new Subject<any>();
	public postAlert(severity: string = '', message: any = '') {
		this.nextAlert.next({ severity, message });
	}
	public getNextAlert(): Observable<any> {
		return this.nextAlert.asObservable();
	}
}
