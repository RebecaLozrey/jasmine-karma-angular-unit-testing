
import { TodoService } from './todo.service'

export class TodosComponent { 
  todos: any[] = [];
  // message property returns errors from the server
  message; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      //this is the message property 
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
