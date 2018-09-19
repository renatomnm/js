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

 console.log(montaSanduiche("presunto","queijo",callback));

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
