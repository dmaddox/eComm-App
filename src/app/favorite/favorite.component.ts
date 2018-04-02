import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
	@Input('is-selected') isSelected: boolean;  // ('is-favorite') is the alias
	@Output('change') change = new EventEmitter(); // ('change') is the alias

	onClick() {
		this.isSelected = !this.isSelected;
		this.change.emit({newValue: this.isSelected});
	}

}


export interface FavoriteChangedEventArgs {
	newValue: boolean
}