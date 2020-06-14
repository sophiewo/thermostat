'use strict';

class Thermostat { 
  constructor(){
    this.DEFAULT_TEMPERATURE = 20
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true
    this.MAX_TEMP_PSM_ON = 25
    this.MAX_TEMP_PSM_OFF = 32
  }

  getCurrentTemperature(){
    return this.temperature;
  };  

  isPowerSavingModeOn(){
    return this.powerSavingMode === true;
  }

  up(){
    if (this.isMaximumTemp()){
      return;
    }
    return this.temperature += 1;  
  };  

  down(){
    if( this.isMinimumTemp()) {
      return;
    }
   return this.temperature -= 1
  };

  isMinimumTemp(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemp(){
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_TEMP_PSM_OFF
    }
      return this.temperature === this.MAX_TEMP_PSM_OFF;
  }

  resetTemperature(){
   return this.temperature = 20
  };

  switchPowerSavingModeOff(){
    this.powerSavingMode = false
  }

  switchPowerSavingModeOn(){
    this.powerSavingMode = true
  }

 

};