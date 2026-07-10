/* ==========================================================
   MINI-PROJECT: Task Manager
   ==========================================================
   Goal: practice LOOPS and ARRAYS using what you already know
   (variables, conditionals, and functions).

   How to use:
   1. Run this file with Node.js: node gerenciador-tarefas.js
      (or paste the code into the browser console - F12)
   2. Complete each function where it says "YOUR CODE HERE"
   3. At the end of the file there are ready-made tests. Run them
      and check whether the printed result matches the "expected
      result" noted in the comment.

   Tip: you don't need to do them in order, but follow the
   numbering — the challenges get harder as you go.
   ========================================================== */

// Our task "database". Each task is an object.

const tarefas = [
  { nome: "Estudar loops",      concluida: false, prioridade: "alta"  },
  { nome: "Fazer compras",      concluida: true,  prioridade: "baixa" },
  { nome: "Estudar arrays",     concluida: false, prioridade: "alta"  },
  { nome: "Lavar o carro",      concluida: true,  prioridade: "media" },
  { nome: "Ler um livro",       concluida: false, prioridade: "baixa" },
];


/* ----------------------------------------------------------
   CHALLENGE 1: List all tasks
   Loop through the array with a for and print the name of each
   task to the console. Ex: "- Estudar loops"
---------------------------------------------------------- */
function listarTarefas() {
  for(let i of tarefas){
    console.log(i)
  }
}


/* ----------------------------------------------------------
   CHALLENGE 2: Count completed tasks
   Use a for + if to count how many tasks have
   concluida === true. Return the number.
---------------------------------------------------------- */
function contarConcluidas() {

   let c = 0

      for (let i of tarefas){
         if (i.concluida === true){
            c++
         }
   }

   return c

}


/* ----------------------------------------------------------
   CHALLENGE 3: Filter by priority
   Receive a list and a priority (e.g. "alta") and return
   a NEW array containing only the tasks with that priority.
   Tip: create an empty array, loop through the original list
   with a for, and use .push() to add the matching ones.
---------------------------------------------------------- */
function filtrarPorPrioridade(prioridade) {
  const p = []
  
  for (let i of tarefas) {
      if (i.prioridade === "alta"){
         p.push(i)
      }
  }
  return p
}

/* ----------------------------------------------------------
   CHALLENGE 4: Calculate completion percentage
   Return (as a number) the percentage of completed tasks.
   Ex: 2 out of 5 completed = 40
   Tip: you can reuse the function from Challenge 2!
---------------------------------------------------------- */
function calcularPercentual() {
  let c = 0

  let t = tarefas.length

  for (let t of tarefas){
      if(t.concluida === true){
         c++
      }
  }

  let p = (c / t) * 100

  return p
}


/* ----------------------------------------------------------
   CHALLENGE 5 (harder): Add a new task
   Create a new object with nome, concluida (starts false), and
   prioridade received as parameters, and add it to the original
   array using .push().
---------------------------------------------------------- */
function adicionarTarefa(nome, prioridade) {
   nome = "Adicionar tarefa"

   prioridade = "baixa"

  let o = {
      nome: nome,
      concluida: false,
      prioridade: prioridade,
  }
  tarefas.push(o)
}


/* ==========================================================
   TESTS - no need to touch this, just run it and check
   ========================================================== */
console.log("=== Challenge 1: List tasks ===");
listarTarefas(tarefas);
// Expected result: the 5 tasks listed with "- " in front

console.log("\n=== Challenge 2: Count completed ===");
console.log(contarConcluidas(tarefas));
// Expected result: 2

console.log("\n=== Challenge 3: Filter by priority 'alta' ===");
console.log(filtrarPorPrioridade(tarefas, "alta"));
// Expected result: array with "Estudar loops" and "Estudar arrays"

console.log("\n=== Challenge 4: Completion percentage ===");
console.log(calcularPercentual(tarefas) + "%");
// Expected result: 40%

console.log("\n=== Challenge 5: Add task ===");
adicionarTarefa(tarefas, "Praticar JS todo dia", "alta");
listarTarefas(tarefas);
// Expected result: now 6 tasks appear, including the new one