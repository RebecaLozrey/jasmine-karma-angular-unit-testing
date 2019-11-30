import {greet} from './greet'

describe('GREET SUITE', () => {
  it('should contain the input name', ()=>{
    
    let name = "Mosh";

    expect(greet(name)).toContain(name);
    
  });
}

);