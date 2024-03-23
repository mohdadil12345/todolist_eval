import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  username: string = '';

  handle_form(ele: NgForm) {

  console.log(ele.value)

  }





 
}
