var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

// Reference to the dropdown select element
var selectElement = document.getElementById('planets');

// 1. Populate the dropdown element with the data found in the planets array
planets.forEach(function(planet) {
    var option = document.createElement('option');
    option.text = planet[0];
    option.value = planet[0];
    selectElement.appendChild(option);
});

function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight
    var multiplier = 0;
    planets.forEach(function(planet) {
        if (planet[0] === planetName) {
            multiplier = planet[1];
        }
    });
    return weight * multiplier;
}

function handleClickEvent(e) {
    // Prevent form submission if it's in a form
    e.preventDefault(); 

    // 3. Declare a variable called userWeight and assign the value of the user's weight.
    var userWeight = parseFloat(document.getElementById('user-weight').value);

    // 4. Extract the exact text from the active option element to match the test runner
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var planetName = selectedOption.text;

    // 5. Declare a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetName);

    // 6. Display the exact phrase the test expects (including 2 decimal places)
    var outputMessage = "If you were on " + planetName + ", you would weigh " + result.toFixed(2) + "lbs!";
    document.getElementById('output').innerText = outputMessage;
}

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function
document.getElementById('calculate-button').onclick = handleClickEvent;
