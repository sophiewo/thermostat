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
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toBeLessThan(20);
  });

  it("4. The minimum temperature is 10 degrees", function(){
    for (var i = 0; i<11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("5. Has power saving mode (PSM) on by default", function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })
  
  it("5.1 PSM can be turned off", function(){
    thermostat.switchPowerSavingModeOff()
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
});


// Thermostat starts at 20 degrees
