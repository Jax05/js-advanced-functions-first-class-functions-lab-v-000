const returnFirstTwoDrivers = function(drivers) {
  drivers.slice(0, 3)
}

const returnLastTwoDrivers = function(drivers) {
  drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}
