let nameStudent = prompt("Student's name:")

let fg = Number(prompt("Student's first grade:"))

let sg = Number(prompt("Student's second grade:"))

let av = (fg + sg)/2

function gradeav() {
    if (av >= 7){
        console.log(`The student ${nameStudent} was approved with av: ${av}`)
    } else if (av < 5) {
        console.log(`The student ${nameStudent} was failed with av: ${av}`)
    } else if (av >= 5 && av <= 6.9) {
        console.log(`The student ${nameStudent} was in recuperation with av: ${av}`)
    }
}

gradeav()