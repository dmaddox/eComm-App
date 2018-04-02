// import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@Input('is-selected') isSelected: boolean;  // ('is-favorite') is the alias
@Output('change') change = new EventEmitter(); // ('change') is the alias
 courses;

 loadCourses() {
   this.courses = [
   { id: 1, name: 'course1 ' },
   { id: 2, name: 'course2 ' },
   { id: 3, name: 'course3 ' }
 ];
 }

 onAdd() {
   this.courses.push({ id: 4, name: 'course4'});
 }

  onChange(course) {
   course.name = "UPDATED";
 }

 onRemove(course) {
   console.log(course);
   let index = this.courses.indexOf(course);
   console.log(index);
   this.courses.splice(index, 1);
 }

 trackCourse(index, course) {
   return course ? course.id : undefined;
 }


   onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }
}
