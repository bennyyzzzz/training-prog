/* ==========================================================
   MINI-PROJETO: Gerenciador de Tarefas
   ==========================================================
   Objetivo: praticar LOOPS e ARRAYS usando o que você já sabe
   (variáveis, condicionais e funções).

   Como usar:
   1. Rode este arquivo com Node.js: node gerenciador-tarefas.js
      (ou cole o código no console do navegador - F12)
   2. Complete cada função onde está escrito "SEU CÓDIGO AQUI"
   3. No final do arquivo já tem testes prontos. Rode e confira
      se o resultado impresso bate com o "resultado esperado"
      que está no comentário.

   Dica: não precisa fazer na ordem, mas siga a numeração,
   os desafios vão ficando mais difíceis.
   ========================================================== */

// Nosso "banco de dados" de tarefas. Cada tarefa é um objeto.

const tarefas = [
  { nome: "Estudar loops",      concluida: false, prioridade: "alta"  },
  { nome: "Fazer compras",      concluida: true,  prioridade: "baixa" },
  { nome: "Estudar arrays",     concluida: false, prioridade: "alta"  },
  { nome: "Lavar o carro",      concluida: true,  prioridade: "media" },
  { nome: "Ler um livro",       concluida: false, prioridade: "baixa" },
];


/* ----------------------------------------------------------
   DESAFIO 1: Listar todas as tarefas
   Percorra o array com um for e imprima o nome de cada tarefa
   no console. Ex: "- Estudar loops"
---------------------------------------------------------- */
function listarTarefas() {
  for(let i of tarefas){
    console.log(i)
  }
}


/* ----------------------------------------------------------
   DESAFIO 2: Contar tarefas concluídas
   Use um for + if para contar quantas tarefas têm
   concluida === true. Retorne o número.
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
   DESAFIO 3: Filtrar por prioridade
   Receba uma lista e uma prioridade (ex: "alta") e retorne
   um NOVO array só com as tarefas dessa prioridade.
   Dica: crie um array vazio, percorra a lista original com
   for, e use .push() para adicionar as que combinam.
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
   DESAFIO 4: Calcular percentual concluído
   Retorne (como número) a porcentagem de tarefas concluídas.
   Ex: 2 de 5 concluídas = 40
   Dica: você pode reaproveitar a função do Desafio 2!
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
   DESAFIO 5 (mais difícil): Adicionar uma nova tarefa
   Crie um objeto novo com nome, concluida (inicia false) e
   prioridade recebidos como parâmetros, e adicione ao array
   original usando .push().
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
   TESTES - não precisa mexer aqui, só rodar e conferir
   ========================================================== */
console.log("=== Desafio 1: Listar tarefas ===");
listarTarefas(tarefas);
// Resultado esperado: as 5 tarefas listadas com "- " na frente

console.log("\n=== Desafio 2: Contar concluídas ===");
console.log(contarConcluidas(tarefas));
// Resultado esperado: 2

console.log("\n=== Desafio 3: Filtrar por prioridade 'alta' ===");
console.log(filtrarPorPrioridade(tarefas, "alta"));
// Resultado esperado: array com "Estudar loops" e "Estudar arrays"

console.log("\n=== Desafio 4: Percentual concluído ===");
console.log(calcularPercentual(tarefas) + "%");
// Resultado esperado: 40%

console.log("\n=== Desafio 5: Adicionar tarefa ===");
adicionarTarefa(tarefas, "Praticar JS todo dia", "alta");
listarTarefas(tarefas);
// Resultado esperado: agora aparecem 6 tarefas, incluindo a nova