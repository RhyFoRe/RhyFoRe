import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {DlDateTimePickerChange} from 'angular-bootstrap-datetimepicker';
import { EventService, AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    maxView = 'year';
    minuteStep = 5;
    minView = 'minute';
    selectedDate: Date;
    showCalendar = true;
    startView = 'day';
    views = ['minute', 'hour', 'day', 'month', 'year'];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private eventService: EventService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const durationValidators = [Validators.pattern("^[0-9]*$")];
        if (this.isAddMode) {
            durationValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
            title: [''],
            description: [''],
            duration: ['', durationValidators],
            slaveFirst: ['', durationValidators],
            slaveSecond: ['', durationValidators],
            slaveThird: ['', durationValidators]
        });

        // if (!this.isAddMode) {
        //     this.accountService.getById(this.id)
        //         .pipe(first())
        //         .subscribe(x => {
        //             this.f.firstName.setValue(x.firstName);
        //             this.f.lastName.setValue(x.lastName);
        //             this.f.username.setValue(x.username);
        //         });
        // }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
          console.log('--------invalud')
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createEvent();
        } else {
            this.updateEvent();
        }
    }

    onCustomDateChange(event: DlDateTimePickerChange<Date>) {
        console.log(event.value);
      }

    private createEvent() {
        this.eventService.add(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Event added successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['.', { relativeTo: this.route }]);
                },
                error => {
                   console.log(error)
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private updateEvent() {
        this.accountService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['..', { relativeTo: this.route }]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}