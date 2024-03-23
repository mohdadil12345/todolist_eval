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
  completed : string = ""

  users: any;
  todoArray : any

  constructor(private servc: TodoServiceService) {}

  handle_form(ele: NgForm) {

  console.log(ele.value)


  this.users = {
    title: ele.value.title,
    status : "pending"

  };

  console.log('usersss', this.users); // isko post krenge url me

  // post

    this.servc.postInputData(this.users).subscribe((data) => {
      alert('added todos');
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



// delete 

handle_delete(id : any) {
   alert(`todo with id ${id} deleted`)
   this.servc.deleteTodo(id).subscribe(data => {
    this.todoArray = this.todoArray.filter((item: any) => item.id !== id);
   })
}



// togllle  
update_btn(id: any) {
  const updt = this.todoArray.find((ele: any) => ele.id === id);
  if (updt) {
    const newStatus = !updt.status;
    this.servc.updt_status(id, newStatus).subscribe(() => {
      updt.status = newStatus;
      this.todoArray = [...this.todoArray];
    });
  }
}



 
}
