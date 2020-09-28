import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  mylist:any

  constructor() {
    this.mylist=[
      {
        "Subject":"InterviewProblems",
        "Status":"Pending"
      },
      {
        "Subject":"Git",
        "Status":"To Do"
      },
      {
        "Subject":"GSoC",
        "Status":"Preparing"
      },
      {
        "Subject":"Mini Project",
        "Status":"To Do"
      }

    ]
  }

  ngOnInit(): void {
    }
  }
   
  
  