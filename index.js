const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 3)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}
