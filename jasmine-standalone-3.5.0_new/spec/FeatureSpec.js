'use strict';

describe("Feature test:" , function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Thermostat starts with a temperature of 20degs", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("2. You can increase the temperature with an up function", function(){
    expect(thermostat.up()).toBeGreaterThan(20);
  });
  

});


// Thermostat starts at 20 degrees
