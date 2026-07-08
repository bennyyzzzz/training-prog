function fncIMC() {
    const name = prompt("What's your name?")

    const weight = Number(prompt("What's your weight?"))

    const height = Number(prompt("What's your height"))

    const calcIMC = weight / (height * height)

    console.log(`Name: ${name}`)
    console.log(`BMI: ${calcIMC.toFixed(2)}`)

    if (calcIMC <= 18.5){
        console.log("Situation: Underweight")
    } else if (calcIMC > 18.5 && calcIMC <= 24.9) {
        console.log("Situation: Normal weight")       
    } else if (calcIMC >= 25 && calcIMC <= 29.9) {
        console.log("Situation: Overweight")
    } else if (calcIMC >= 30) {
        console.log("Situation: Obesity")
    }
}

fncIMC()

let aw = prompt("Want to calculate again? (Yes or No)");
aw = aw.toLowerCase();

while (aw === "yes" || aw === "y") {
    fncIMC();

    aw = prompt("Want to calculate again? (Yes or No)");
    aw = aw.toLowerCase();
}

console.log("Thank you!");
