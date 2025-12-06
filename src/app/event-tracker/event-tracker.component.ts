import { Component } from '@angular/core';
import { EventItem } from '../models/event-item';

@Component({
  selector: 'app-event-tracker',   // ✅ selector must match what you use in app.component.html
  templateUrl: './event-tracker.component.html',
  styleUrls: ['./event-tracker.component.css']
})
export class EventTrackerComponent {
  title: string = '';
  date: string = '';
  events: EventItem[] = [];

  constructor() {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      this.events = JSON.parse(savedEvents);
    }
  }

  addEvent() {
    if (this.title && this.date) {
      const newEvent: EventItem = {
        id: Date.now(),
        title: this.title,
        date: this.date
      };
      this.events.push(newEvent);
      localStorage.setItem('events', JSON.stringify(this.events));
      this.title = '';
      this.date = '';
    } else {
      alert('Please enter both title and date!');
    }
  }
}
