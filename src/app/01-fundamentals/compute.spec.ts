import {compute} from './compute'

describe('COMPUTE SUITE', function(){

  it('should return zero for negative numbers', ()=>{
    expect(compute(-1)).toBe(0);
  });

  it('should return one for zero input', ()=>{
    expect(compute(0)).toBe(1);
  });


});