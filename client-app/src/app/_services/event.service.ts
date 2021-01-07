import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Event } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class EventService {
    public event: Observable<Event>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    getAll() {
      return this.http.get<Event[]>(`${environment.apiUrl}/events`);
    }

    getById(id: string) {
        return this.http.get<Event>(`${environment.apiUrl}/events/${id}`);
    }

   add(event: Event) {
      return this.http.post(`${environment.apiUrl}/events`, event);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/events/${id}`, params)
            .pipe(map(x => {
                // update stored event if the logged in user updated their own record
                
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/events/${id}`)
            .pipe(map(x => {
                return x;
            }));
    }
}