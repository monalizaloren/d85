

function add() {
	backgroundImgTag =???(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = CarregarPlanoDeFundo; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	roverImgTag = ???(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = CarregarRover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}

function ???() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
	// ctx= contexto
	// drawimage = desenhar imagem
	//ctx.drawImage = desenhar o contexto da imagem.
	// Qual imagem?? backgroundImgTag
}

function ???() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", ???);
// O computador estará esperando um evento acontecer na JANELA inteira do site
// Se esse evento for o 'keydown', irá acontecer a função myKeyDown

function myKeyDown(e)
{
	keyPressed = e.keyCode; //e.keyCode obterá o valor da tecla pressionada. E, armazenaremos-a dentro de uma variável keyPressed.
	
	console.log(keyPressed); // mostrará no console a tecla pressionada

		if(keyPressed == '??') // se o valor da tecla pressionada for 38, irá acontecer a função 'cima()'
		{
			cima();
			
		}
		if(keyPressed == '??')
		{
			baixo();
			
		}
		if(keyPressed == '??')
		{
			esquerda();
			
		}
		if(keyPressed == '???')
		{
			direita();
			
		}
}
function cima()
{
	if(roverY >=0)
	{
		roverY = roverY ? 10;
		CarregarPlanoDeFundo();
		 CarregarRover();
	}
}
function baixo()
{
	if(roverY <=500)
	{
		roverY =roverY ? 10;
		CarregarPlanoDeFundo();
		CarregarRover();
	}
}
function esquerda()
{
	if(roverX >= 0)
	{
		roverX =roverX ? 10;
		CarregarPlanoDeFundo();
		CarregarRover();
	}
}
function direita()
{
	if(roverX <= 700)
	{
		roverX =roverX ? 10;
		CarregarPlanoDeFundo();
		CarregarRover();
   }
}

	
