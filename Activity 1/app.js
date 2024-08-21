//  This is the component for the first item
const btn1 = document.getElementById("btn1")
//for displaying the information
btn1.addEventListener("click", () => {
    //craeting and initialize our varaiables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x =`Hello! ${name}, I see that you are from ${address} and you are also pursuing ${major} and you can be contact using ${telephone}.`
    document.getElementById("output1").innerHTML= x 
})

//no. 2 JavaScript
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let totalSales = document.getElementById("sales").value;
    let profit = totalSales * 0.23;
    let message = `The annual profit for the company is projected to be ${profit}`;
    document.getElementById("output2").innerHTML = message;
});

//no. 3 JavaScript


//no.7 JavaScript
function calculatePercentage() {
    let numMales = document.getElementById("numMales").value;
    let numFemales = document.getElementById("numFemales").value;
    let totalStudents = parseInt(numMales) + parseInt(numFemales);
    let malePercentage = (parseInt(numMales) / totalStudents) * 100;
    let femalePercentage = (parseInt(numFemales) / totalStudents) * 100;
    let message = `Percentage of males: ${malePercentage.toFixed(2)}%<br>Percentage of females: ${femalePercentage.toFixed(2)}%`;
    document.getElementById("result").innerHTML = message;
    return false;
}