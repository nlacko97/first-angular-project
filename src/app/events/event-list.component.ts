import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr

@Component({
    template: `
    <div>
        <h1> Angular Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>    
    </div>
    `
})

export class EventListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventService: EventService, 
              private toastrService: ToastrService,
              private route:ActivatedRoute) {
  
  }
  
  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName)
  }
}