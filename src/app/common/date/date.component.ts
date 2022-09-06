import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import moment from 'moment-timezone';
import { Moment } from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  public tzNames!: string[];

  public selectedTz!: string;

  public utcDate!: moment.Moment;

  public tzDate!: moment.Moment;
  constructor() {
    this.tzNames = moment.tz.names();
    this.timeZoneChanged('America/New_York');
  }
  public timeZoneChanged(timeZone: string): void {
    console.log(timeZone);
    this.selectedTz = timeZone;

    this.updateTime(timeZone);
  }

  private updateTime(timeZone: string) {
    const currentTime = new Date().getTime();

    this.utcDate = moment(currentTime).utc();

    this.tzDate = moment(currentTime).tz(timeZone);
  }

  ngOnInit(): void {}
}
