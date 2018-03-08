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
		{{ text | summary:25}}
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
	text = `
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	`

	constructor(service: CoursesService) {
		this.courses = service.getCourses();
	}
}