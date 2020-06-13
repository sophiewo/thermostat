'use strict';

class Thermostat { 
  constructor(){
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.powerSavingMode = true
  }

  getCurrentTemperature(){
    return this.temperature;
  };  

  isPowerSavingModeOn(){
    return this.powerSavingMode === true;
  }

  up(){
    return this.temperature += 1;  
  };  

  down(){
    if( this.isMinimumTemp()) {
      return;
    }
   return  this.temperature -= 1
  };

  isMinimumTemp(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff(){
    this.powerSavingMode = false
  }

  switchPowerSavingModeOn(){
    this.powerSavingMode = true
  }
};