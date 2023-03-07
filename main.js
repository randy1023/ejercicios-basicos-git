
let sentence= "hola como estas? todo chevere"
  function string(){
   let resultado = sentence.length;
   return resultado;
  };
console.log(string());

cutString=()=>{
 let resultado2= sentence.slice(0,4);
 return resultado2
};
  
console.log(cutString());

spaceString=()=>{
  let resultado3= sentence.split(" ",sentence.length);
  return resultado3
}
console.log(spaceString());

triString=()=>{
  let resultado4=sentence.repeat(3);
  return resultado4
};
console.log(triString())
  