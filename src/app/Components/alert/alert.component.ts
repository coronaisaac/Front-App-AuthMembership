import { Component, Input } from '@angular/core';
import { Events } from 'src/app/Enums/Events.Enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  {
  @Input() Messaages:string = '';
  @Input() Event!:Events;
  /**
   *
   */
  constructor() {
  }
}
