import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


describe('TodosComponent', () => {
  let service: TodoService;
  let component: TodosComponent;

  beforeEach(() => {
    // null or fake http service
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should check if getTodos method is called onInit', () => {

    let todos = [1,2,3];
    spyOn(service, 'getTodos').and.callFake( ()=> {
       return Observable.from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

});