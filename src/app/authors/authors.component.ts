import { AuthorsService } from '../services/authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
	title = "Authors:";
	authors;

  constructor(service: AuthorsService) { 
  	this.authors = service.getAuthors();
  }

}
