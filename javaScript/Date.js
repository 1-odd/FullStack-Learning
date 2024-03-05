

const date = new Date();

console.log(date.getTime()); // total miliseconds  since 1970-01-01T00:00:00Z

// year

console.log(date.getFullYear( )); // returns the full year (e.g., 2007)

// month
var month = date.getMonth( );
console.log(month + 1);       // returns the month (zero based, so Jan is 0 and Dec is 11)

// date

console.log(date.getDate( ));   // returns the day of the month (1-31


// time

console.log(date.getHours( ));    // returns hour (0-23)
console.log(date.getMinutes( ));  // returns minutes (0-59)
console.log(date.getSeconds( ));  // returns seconds (0-59)
console.log(date.getMilliseconds( ));  //returns milliseconds (0-999)

