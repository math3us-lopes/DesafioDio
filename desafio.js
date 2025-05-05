let nome= "Zaratráz"
let xp =2000
let categoria;
switch(true){
  case (xp<1000 ):
  categoria ="Ferro";
  break;
  case (xp>=1001 && xp<2001):
  categoria="Bronze" ;
  break;
  case (xp>=2001 && xp <5001):
  categoria="Prata";
  break;
  case (xp>=5001 && xp<7001):
  categoria="Ouro";
  break;
  case (xp>=7001 && xp<8001):
  categoria="Platina";
  break;
  case (xp>=8001 && xp<9001):
  categoria="Ascendente";
  break;
  case (xp>=9001 && xp<10001):
  categoria="Imortal";
  break;
  case (xp>=10001):
  categoria="Radiante";
  break;
  default :
  console.log(" Você Não possui uma Categoria");

}
console.log("O Herói: "+nome+" "+"está no nível :"+categoria);
