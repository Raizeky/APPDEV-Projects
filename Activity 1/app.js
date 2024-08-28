//  This is the component for the first item
const btn1 = document.getElementById("btn1")
//for displaying the information
btn1.addEventListener("click", () => {
    //creating and initialize our variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x =`Hello! <strong>${name}</strong>, I see that you are from <strong>${address}</strong> and you are also <br>
    pursuing <strong>${major}</strong> and you can be contact using <strong>${telephone}</strong>.`
    document.getElementById("output1").innerHTML= x 
})

//no. 2 JavaScript
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let totalSales = document.getElementById("sales").value;
    let profit = totalSales * 0.23;
    let message = `<strong>Result: </strong>The annual profit for the company is projected to be <strong>${profit}</strong>.`;
    document.getElementById("output2").innerHTML = message;
});

//no. 3 JavaScript
const btn3 = document.getElementById("btn3");
const output3 = document.getElementById("output3");
btn3.addEventListener("click", () => {
    let speed = parseFloat(document.getElementById("speed").value);
    let time1 = parseFloat(document.getElementById("time1").value);
    let time2 = parseFloat(document.getElementById("time2").value);
    let time3 = parseFloat(document.getElementById("time3").value);
    //travel is distance
    let travel1 = speed * time1;
    let travel2 = speed * time2;
    let travel3 = speed * time3;
    output3.innerHTML = `The distance of the car will travel in ${time1} hours is <strong>${travel1}</strong> miles.<br>
        The distance of the car will travel in ${time2} hours is <strong>${travel2}</strong> miles.<br>
        The distance of the car will travel in ${time3} hours is <strong>${travel3}</strong> miles.`
})

//no. 4 JavaScript
const btn4 = document.getElementById("btn4");
const output4 = document.getElementById("output4");
btn4.addEventListener("click", () => {
    let distance = parseFloat(document.getElementById("distance").value);
    let gas = parseFloat(document.getElementById("gas").value);
    let milesPerGas = distance / gas;
    output4.innerHTML = `<strong>Result: </strong>The car's miles-per-gas is <strong>${milesPerGas.toFixed(2)}</strong>.`;
});

//no. 5 JavaScript
const btn5 = document.getElementById("btn5");
const output5 = document.getElementById("output5");
btn5.addEventListener("click", () => {
    let celsius =  parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (9/5) * celsius + 32;
    //&#8451 is degree Celsius sign and &#8457 is Fahrenheit sign.
    let message5 = `<strong>Answer:</strong> ${celsius} &#8451; is converted to <strong>${fahrenheit} &#8457</strong>.`;
    document.getElementById("output5").innerHTML = message5;
})

//no. 6 JavaScript
const btn6 = document.getElementById("btn6");
const output6 = document.getElementById("output6");
btn6.addEventListener("click", () => {
    let cookiesEaten = parseInt(document.getElementById("cookiesEaten").value);
    let totalCalories = (cookiesEaten / 40) * 10 * 300;
    let message6 = `<strong>Result:</strong> You eat ${cookiesEaten} cookies and consumed <strong>
    ${totalCalories.toFixed(0)} calories</strong>.`;
    output6.innerHTML = message6;
})

//no.7 JavaScript
function calculatePercentage() {
    let numMales = document.getElementById("numMales").value;
    let numFemales = document.getElementById("numFemales").value;
    let totalStudents = parseInt(numMales) + parseInt(numFemales);
    let malePercentage = (parseInt(numMales) / totalStudents) * 100;
    let femalePercentage = (parseInt(numFemales) / totalStudents) * 100;
    let message = `Percentage of males: <strong>${malePercentage.toFixed(2)}</strong>%<br>
    Percentage of females: <strong>${femalePercentage.toFixed(2)}</strong>%`;
    document.getElementById("result").innerHTML = message;
    return false;
}
