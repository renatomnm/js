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

function meuSanduiche(ingrediente1, ingrediente2){
   let frase = "estou comendo um sanduiche com " + ingrediente1 + " e " + ingrediente2;

   function callback(){
     return "Terminei de comer o meu sanduiche";
   }

   return frase + "\n" + callback();
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

console.log(map());