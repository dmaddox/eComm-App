import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
	selector: 'courses',
	template: `
		<h2>{{ title }}</h2>
		<ul>
			<li *ngFor="let course of courses">
				{{ course }}
			</li>
		</ul>
		<input [(ngModel)]="name" (keyup.enter)="onKeyUp()" />
		<div (click)="onDivClicked()">
			<button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'" (click)="onSave($event)" >Save</button>
		</div>
		` 
})
export class CoursesComponent {
	title = "List of courses";
	courses;
	isActive = true;
	name = "DMX";
	onKeyUp() {
		//if ($event.keyCode === 13) console.log("enter was pressed");
		console.log('Your name is: '+ this.name);
	}
	onDivClicked() {
		console.log("Div was clicked");
	}
	onSave($event) {
		$event.stopPropagation();
		console.log("Button was clicked");
		console.log($event);
	}

	constructor(service: CoursesService) {
		this.courses = service.getCourses();
	}
}