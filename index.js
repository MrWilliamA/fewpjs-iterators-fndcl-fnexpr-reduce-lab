const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const initialValue = 0;
const totalBatteries = batteryBatches.reduce( (previousValue, currentValue) => previousValue + currentValue, initialValue );

// same as 
  //  function test(a, b) { 
  //      return a + b; 
  //  };

//const totalBatteries = batteryBatches.reduce(test , 0);
