function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 > 0) || year % 400 == 0 ? "Yes" : "No";
}

console.log(isLeapYear(2000)); // Yes
console.log(isLeapYear(2020)); // Yes
console.log(isLeapYear(1900)); // No
console.log(isLeapYear(2021)); // No
