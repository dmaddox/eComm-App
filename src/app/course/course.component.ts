import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
	movie = "";

	onKeyUp() {
		this.movie = this.movie;
	}

}
