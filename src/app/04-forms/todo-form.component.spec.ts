import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms'; 

describe('TODO FORM COMPONENT SUITE', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder);
  });

  it('should generate a form with two elements', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make name control invalid', () => {
    let control = component.form.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});