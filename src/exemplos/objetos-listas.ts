const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissao: "desenvolvedora"
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
  nome: "Andre",
  idade: 25,
  profissao: "Professor"
}

const paula: {nome: string, idade: number, profissao: string} = {
  nome: "Paula",
  idade: 25,
  profissao: "Desenvolvedora"
}

enum Profissao {
  Professora,
  Cantora,
  Desenvolvedora,
  Advogada
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudante extends Pessoa {
  materias: string[]
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 30,
  profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
  nome: "Maria",
  idade: 30,
  profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
  nome: "Jessica",
  idade: 28,
  profissao: Profissao.Desenvolvedora,
  materias: ["Matemática Discreta", "Programação"]
}

const monica: Estudante = {
  nome: "Monica",
  idade: 28,
  materias: ["Matemática Discreta", "Programação"]
}

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(monica.materias);