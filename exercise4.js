function ElectricalAppliance (type, model, power){
    this.view = 'household electrical appliance';
    this.type = type;
    this.model = model;
    this.power = power;
    this.switchOn = false;
  }
  
  
  ElectricalAppliance.prototype.toggleSwitch = function() {
    if (this.switchOn === true)
       this.switchOn = false;
    else
      this.switchOn = true;
  }
  
  ElectricalAppliance.prototype.isOn = function() {
    return this.switchOn;
  }
  
  ElectricalAppliance.prototype.getPower = function() {
    return this.power;
  }
  
  
  function kettle (type, model, power, volume){
    ElectricalAppliance.call(this, type, model, power);
    this.volume = volume;
  }
  
  function iron (type, model, power, weight){
     ElectricalAppliance.call(this, type, model, power);
     this.weight = weight;
  }
  
  kettle.prototype = new ElectricalAppliance()
  iron.prototype = new ElectricalAppliance()
  
  const kettlePhilips = new kettle ("kettle", "HD324", "2200", "1,7")
  const ironSkarlett = new iron('iron', 'SC6786', '2000', '400')
  
  kettlePhilips.toggleSwitch();
  ironSkarlett.toggleSwitch()
  
  function calculateTotalPowerConsumption(appliances) {
    let total = 0;
    appliances.forEach(appliance => {
      if (appliance.isOn() === true) 
      {
        total += +appliance.getPower();
      }
    });
    return total;
  };
  
  const appliances = [kettlePhilips, ironSkarlett];
  console.log('Total: ' + calculateTotalPowerConsumption(appliances));
  