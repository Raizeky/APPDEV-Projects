const quote2 = [
    "Science is organized knowledge. Wisdom is organized life.",
    "Act as if the maxim of your action were to become a universal law.",
    "The unexamined life is not worth living, but the unlived life is not worth examining.",
    "Out of the crooked timber of humanity, no straight thing was ever made.",
    "Morality is not a doctrine of how we may make ourselves happy, but how we may make ourselves worthy of happiness."
];

const colors= ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = quote2[randomNumber]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * quote2.length)
}