import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { get, map, assignIn, defaults, isArray, isString } from 'lodash-es';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [AlertService]

})
export class AlertComponent implements OnInit, OnDestroy {

  constructor(
    private alertService: AlertService
    // ,private router: Router,
  ) { }

  /**
	 * Options object for cui-alert
	 */
  @Input() options: any = {};

	/**
	 * Whether to listen for global alerts from the alert service
	 */
  @Input() global = false;

  public alert: any = {
    message: '',
    messages: [],
    severity: 'info',
    visible: false,
  };

  private alertSubscribe: Subscription =
    this.alertService.getNextAlert()
      .subscribe((alert: any) => {
        if (this.global) {
          this.options.show(alert.message, alert.severity);
        }
      });

	/**
	 * Returns the color class string for the alert
	 * @returns The color class string
	 */
  public getColorClass(): string {
    const alt = get(this.options, 'alt', 0);
    let altClass = '';
    switch (alt) {
      case 1: altClass = '-alt'; break;
      case 2: altClass = '-alt2'; break;
      default: altClass = ''; break;
    }

    switch (this.alert.severity) {
      case 'success':
        return `alert--success${altClass}`;
      case 'warning':
        return `alert--warning${altClass}`;
      case 'danger':
        return `alert--danger${altClass}`;
      default:
        return `alert--info${altClass}`;
    }
  }

	/**
	 * Returns the class string for the alert's icon
	 * @returns The icon string
	 */
  public getIconClass() {
    switch (this.alert.severity) {
      case 'success':
        return 'icon-check-outline';
      case 'warning':
        return 'icon-warning-outline';
      case 'danger':
        return 'icon-error-outline';
      default:
        return 'icon-info-outline';
    }
  }

  // public navigate(url: string, queryParams: any = {}) {
  //   this.router.navigate([url], { queryParams });
  // }

  ngOnInit() {
    this.options = assignIn(
      this.options,
      {
        show: (message: any, severity: string) => {
          this.alert.messages = [];
          this.alert.message = '';

          if (isArray(message)) {
            this.alert.messages = map(message, (msg: any) => {
              return (isString(msg)) ? { message: msg } : msg;
            });
          } else {
            this.alert.message = message;
          }
          this.alert.severity = severity;
          this.alert.visible = true;
        },
        hide: () => {
          this.alert.visible = false;
          this.alert.messages = [];
          this.alert.message = '';
        },
      });

    defaults(this.options, {
      alt: 0,
      closeButton: true,
    });
  }

  ngOnDestroy() {
    this.alertSubscribe.unsubscribe();
  }

}
