// import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tweet = {
  // 	body: "This is my tweet...",
  // 	likesCount: 10,
  // 	isLiked: true
  // };

  courses = [1, 2];


 //  onLikeClicked(event: boolean) {
 //  	console.log("Favorite changed: ", event);
 //  	if (this.tweet.likesCount > 0)
	// 	this.tweet.likesCount = 0;
	// else 
	// 	this.tweet.likesCount = 1;
 //  }
}
