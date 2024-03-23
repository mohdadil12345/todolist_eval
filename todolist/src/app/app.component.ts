import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoServiceService } from './service/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = '';


  users: any;
  todoArray : any

  constructor(private servc: TodoServiceService) {}

  handle_form(ele: NgForm) {

  console.log(ele.value)


  this.users = {
    title: ele.value.title,

  };

  console.log('usersss', this.users); // isko post krenge url me

  // post

    this.servc.postInputData(this.users).subscribe((data) => {
      alert('added data');
      console.log('data', data);
      this.getAllusers()
    })



  }




  // getData   getTodoData

  getAllusers() {

    this.servc.getTodoData().subscribe(data => {
        console.log("getData", data)
        this.todoArray = data
   })


   }
   ngOnInit() {
    this.getAllusers()
  }


 
}
