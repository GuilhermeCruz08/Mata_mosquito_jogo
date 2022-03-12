let altura = 0
let largura = 0;
let vidas = 1; 
let tempo = 0;
let criaMosquito_tempo = 0
//Procura arg depois da ?
let nivel = window.location.search;
nivel.replace("?", "")
if(nivel === "normal")
{ 
  criaMosquito_tempo = 1500;
				tempo = 40;
}
else if(nivel === "dificil")
{
  criaMosquito_tempo = 1000;
				tempo = 25
}
else
{
  criaMosquito_tempo = 750; 
				tempo = 8
}
/* Funcao caso mude o tamanho da janela */
function MudancaTamanho()
{
   altura = window.innerHeight;
   largura = window.innerWidth;
   console.log(altura,largura)
}
MudancaTamanho();

let cronometro = setInterval(function()
	{
	  tempo--;
	  if(tempo < 0) 
	  {
    clearInterval(cronometro);
    clearInterval(limpar_mosca);
	  				 				
	  }
	  else 
	  {
	  				document.getElementById("cronometro").innerHTML = tempo;
	  }
	}, 1000)
function PosAleatoria()
{
  /* 
  Verificar se existe um
  elemento com Id Mosca
  */
  let id_mosquito = document.getElementById("mosca")
  if(id_mosquito)
  {
    id_mosquito.remove();
    
    /*Manipulando vidas*/
    if(vidas > 3)
    {
      window.location.href = "gameover.html" 
    }
    else
    {
   document.getElementById("vida" + vidas).src = "imagens/coracao_vazio.png";
    vidas++
    }
  }
  
  /* Criando posições randômicas */
//Posicao aleatoria eixo X
let posX = Math.floor(Math.random() * largura) - 150;
//Posicao aleatória eixo Y
let posY = Math.floor(Math.random() * largura) - 100;
/* -100 para a imagem nao
passar do tamanho da pg */
posX < 0 ? posX = 0 : posX = posX
posY < 0 ? posY = 0 : posY = posY;
console.log(`Posicao x ${posX} e Posicao y ${posY}`);
  
				/* CRIAR ELEMENTOS HTML */
  let mosquito = document.createElement("img");
  mosquito.className = TamanhoAleatorio() + " " + LadoAleatorio();
  mosquito.src = "imagens/mosca.png";
  mosquito.style.left = posX + "px";
  mosquito.style.top = posY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosca";
  //Clique na imagem
  mosquito.onclick = () => {mosquito.remove();} 
  /*function() {this.remove()};*/
//Adicionando "filho" ao body
document.body.appendChild(mosquito);
 console.log(`Tamanho ${TamanhoAleatorio()} e ${LadoAleatorio()}`);
}

/* Criando tamanho aleatório */
function TamanhoAleatorio()
{
			let classe = Math.floor( Math.random() * 3);
			switch(classe)
		 {
		 				case 0:
      return "primeiroMosquito";
    case 1:
      return "segundoMosquito";
    case 2:
     return "terceiroMosquito";
 /* Return finaliza o processamento da função, sem a necessidade do break */
		 }
		 
}
/* Criando lado aleatorio do mosquito */
function LadoAleatorio()
{
				let classe = Math.floor( Math.random() * 2);
				switch(classe)
				{
							case 0:
							return "ladoA"
    case 1:
    return "ladoB"
				}
}
