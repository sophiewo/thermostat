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

  it("5.2 PSM can be turned back on", function(){
    thermostat.switchPowerSavingModeOff()
    thermostat.switchPowerSavingModeOn()
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  describe("Maximum temperature", function(){
    it("6. If PSM on, the max temp is 25 deg", function () {
      for(var  i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    })

    it("7. If PSM off, the max temp is 32 deg", function(){
      for(var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  it("8. Can be reset to the default temp", function(){
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })
});
