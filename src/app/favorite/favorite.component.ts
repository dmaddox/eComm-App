import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
	@Input('is-favorite') isFavorite: boolean;  // ('is-favorite') is the alias
	@Output('change') change = new EventEmitter(); // ('change') is the alias

	onClick() {
		this.isFavorite = !this.isFavorite;
		this.change.emit({newValue: this.isFavorite}});
	}

}


export interface FavoriteChangedEventArgs {
	newValue: boolean
}