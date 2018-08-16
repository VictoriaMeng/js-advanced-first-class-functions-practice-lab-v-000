// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name));
};
function logDriversByHometown(drivers, town) {
  logDriverNames(drivers.filter(driver => driver.hometown == town));
};
function driversByRevenue(drivers) {
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};
function driversByName(drivers) {
  return [...drivers].sort(function(a, b) {
      return a.name - b.name;
  });
};
