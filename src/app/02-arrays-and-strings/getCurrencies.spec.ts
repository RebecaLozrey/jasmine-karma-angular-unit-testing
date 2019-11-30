import { getCurrencies } from "./getCurrencies";

describe( "GET CURRENCIES SUITE", ()=>{

  it("contains available currencies", ()=>{
    const currencies = getCurrencies();
    expect(currencies).toContain("USD");
    expect(currencies).toContain("AUD");
    expect(currencies).toContain("EUR");
  });

});