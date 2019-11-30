import {compute} from './compute'

describe('Compute Suite', function(){

  it('SpecPath 1: should return zero for negative numbers', ()=>{
    expect(compute(-1)).toBe(0);
  });

  it('SpecPath 2: should return one for zero input', ()=>{
    expect(compute(0)).toBe(1);
  });


});