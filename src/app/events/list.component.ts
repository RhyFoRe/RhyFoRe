import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { EventService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    events = [];

    constructor(private eventService: EventService) {}

    ngOnInit() {
      this.eventService.getAll()
        .pipe(first())
        .subscribe(events => this.events = events
        );
    }

    deleteEvent(id: string) {
        const event = this.events.find(x => x.id === id);
        event.isDeleting = true;
        this.eventService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.events = this.events.filter(x => x.id !== id) 
            });
    }
}