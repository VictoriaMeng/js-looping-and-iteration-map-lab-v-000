// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
};
function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const driver_array = driver.split(" ");
    Object.assign({firstName: driver_array[0], lastName: driver_array[1]});
  });
};

