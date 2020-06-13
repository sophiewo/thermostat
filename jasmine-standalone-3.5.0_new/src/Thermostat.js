'use strict';

class Thermostat { 
  constructor(){
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.psm = true
  }

  getCurrentTemperature(){
    return this.temperature;
  };  

  isPowerSavingModeOn(){
    return this.psm === true;
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
    return this.psm === true;
  }

  switchPowerSavingModeOff(){
    this.psm = false
  }
};