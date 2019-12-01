import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('TODOS COMPONENT SUITE', () => {
  let service: TodoService;
  let component: TodosComponent;

  beforeEach(() => {
    // null or fake http service
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should check if getTodos method is called onInit', () => {

    let todos = [1,2,3];
    spyOn(service, 'getTodos').and.callFake( t => {
       return Observable.from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should check if add method is called', () => {

    let spy = spyOn(service, 'add').and.callFake( t => {
      // add method was called
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should check if component add method works', () => {
    let todo = { id: 4 };
    //spyOn overrides the service not the component
    //and then the component uses this new service
    spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should mock an error returning from the server', () => {
    //here we mock an error from the server
    let error = "error from the server";
    spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });

});