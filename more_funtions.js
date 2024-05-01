"use strict"

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city + "," + state + zip);
}

displayMailingLabel("denzel", "123 main street", "brooklyn", "New york", 11226);


displayMailingLabel("Mary", "456 mainstreet", "Newark", "New Jersey", 11234);
