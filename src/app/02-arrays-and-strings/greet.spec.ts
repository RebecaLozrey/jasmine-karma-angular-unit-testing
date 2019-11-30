import {greet} from './greet'

describe('Greet Suite', () => {
  it('should contain the input name', ()=>{
    
    let name = "Mosh";

    expect(greet(name)).toContain(name);
    
  });
}

);