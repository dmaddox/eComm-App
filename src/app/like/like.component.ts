import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
	@Input('likesCount') likesCount: number;
	@Input('isActive') isActive: boolean;
	@Output('click') click = new EventEmitter(); 

	onClick() {
		this.likesCount += (this.isActive) ? -1 : 1;
		this.isActive = !this.isActive;
	}
}
