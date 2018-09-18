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

 alert(meuSanduiche("pão","linguiça"));
