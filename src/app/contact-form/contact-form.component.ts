import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  form = new FormGroup({
    username: new FormControl('', 
      // validators
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ], 
      // async validators
      UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  })

  get username() {
    return this.form.get('username');
  }
}
