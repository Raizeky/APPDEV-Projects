const quotes = [
    "The only true wisdom is in knowing you know nothing.",
    "I cannot teach anybody anything. I can only make them think.",
    "An unexamined life is not worth living.",
    "To find yourself, think yourself.",
    "There is only one good, knowledge, and one evil, ignorance."
];

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

let colorIndex = 0; 
let quoteIndex = 0; 

btn.addEventListener("click", () => {
    color.textContent = quotes[quoteIndex]
    document.body.style.backgroundColor = colors[colorIndex]
    colorIndex = (colorIndex + 1) % colors.length
    quoteIndex = (quoteIndex + 1) % quotes.length
});

