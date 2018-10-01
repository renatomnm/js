function elevaAoSegundo(v1,v2){
  return Math.pow(v1,v2);
}

function quadrado(v1){
  return elevaAoSegundo(v1,2);
}

function hipotenusa(a,b){
  return  Math.sqrt(quadrado(a) + quadrado(b));
}

function trianguloRetangulo(a,b){
  return a + b + hipotenusa(a,b);
}

 const callback = (ing1,ing2) => console.log("terminei meu lanche");

 const montaSanduiche = (ing1, ing2, callback) => {
   console.log("estou comendo meuSanduiche de: " + " " + ing1 + " e " + ing2);
   callback(ing1,ing2);
 }

function geraArray(){
  let arr = [];
  for(let i = 1; i < 21; i++ ){
    arr.push(i);
  }
  return arr;
}

function multiplos(){
  let array = geraArray;
  array.forEach(function m7(valor){
    if(valor % 7 == 0){
      console.log(valor);
    }
  });
}

function map(){
  let array = geraArray();
  array.forEach(function raizQ(valor){
    console.log(Math.sqrt(valor));
  })
}

/*
Criar um objeto chamado pessoa que tenha as seguintes propriedades com valores
predefinidos.
a. idade (number)
b. nome (string)
c. sobrenome (string)
d. sexo (string)
e. estado civil (string)
f. filmes preferidos (array de strings)
*/

// let pessoa = new Object();
// pessoa.idade = 36;
// pessoa.nome = "Adalberto";
// pessoa.sobrenome = "Silva";
// pessoa.sex = "M";
// pessoa.estadoCivil = "casado";
// pessoa.filmes = ["predador","os vingadores","pulp fiction","carga explosiva"];
// pessoa.comer(comida){
//   return "estou comento " + comida;
// }

let pessoa = {
  idade: 36,
  nome: "Adalberto",
  sobrenome: "Silva",
  sex: "M",
  estadoCivil: "casado",
  filmes:["predador","os vingadores","pulp fiction","carga explosiva"],
  comer: function(comida) {
    console.log("estou comendo " + comida );
  }
}

function ficaMaisVelho(){
  pessoa["idade"] = pessoa["idade"] + 1;
}

function prop(){
  console.log(pessoa["idade"]);
  console.log(pessoa["nome"]);
  console.log(pessoa["sobrenome"]);
  console.log(pessoa["sex"]);
  console.log(pessoa["estadoCivil"]);
  console.log(pessoa["filmes"]);
}

prop();

function comprimenta(){
  console.log("olá " + pessoa["nome"] + " " + pessoa["sobrenome"]);
}

comprimenta();
pessoa.comer("macarrão");
