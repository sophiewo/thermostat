'use strict';

describe("Feature test:" , function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("1. Thermostat starts with a temperature of 20degs", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("2. You can increase the temperature with an up function", function(){
    expect(thermostat.up()).toBeGreaterThan(20);
  });
  
  it("3. You can decrease the temperature with a down function", function(){
    expect(thermostat.down()).toBeLessThan(20);
  });

  
});


// Thermostat starts at 20 degrees
