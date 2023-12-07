// Object - stored temperature of 5 City
const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};

// Function (closure) and private cache variable
const getTemperatureForCity = (() => {
  const cache = {}; // stores the result of all data
  
  return city => {
    // Checks data already exists or not
    if (cache[city]) {
      // if exists, returns previously stored value to save time.      
      return cache[city]; 
    }
    
    // New data - stores the new value into cache
    cache[city] = temperatureData[city];
    return cache[city];
  }
})();

// Output

const temperature1 = getTemperatureForCity('New York'); 
console.log(temperature1); // 20 - first time 

const temperature2 = getTemperatureForCity('New York'); 
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity('London'); 
console.log(temperature3); // 18 - first time 

const temperature4 = getTemperatureForCity('London'); 
console.log(temperature4); // 18 (retrieved from cache)
