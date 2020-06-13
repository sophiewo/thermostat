'use strict';

describe("Feature test:" , function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Thermostat starts with a temperature of 20degs", function(){
    expect(thermostat.temperature).toEqual(20);
  });

});


// Thermostat starts at 20 degrees
