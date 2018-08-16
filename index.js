// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name));
};
function logDriversByHometown(drivers, town) {
  logDriverNames(drivers.filter(driver => driver.hometown == town));
};
function driversByRevenue(drivers) {
  const newDrivers = drivers;
  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};
