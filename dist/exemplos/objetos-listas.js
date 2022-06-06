"use strict";
var pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
};
pessoa.idade = 29;
var andre = {
    nome: "Andre",
    idade: 25,
    profissao: "Professor"
};
var paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Cantora"] = 1] = "Cantora";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Advogada"] = 3] = "Advogada";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: "Vanessa",
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
var maria = {
    nome: "Maria",
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática Discreta", "Programação"]
};
var monica = {
    nome: "Monica",
    idade: 28,
    materias: ["Matemática Discreta", "Programação"]
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log("- ", item);
    }
}
listar(monica.materias);
