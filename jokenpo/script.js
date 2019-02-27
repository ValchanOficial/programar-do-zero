var jogadorNome = prompt('Qual é o seu nome?');
var jogadorPontos = 0;
var computadorPontos = 0;
var computadorEscolha = 0;
var jogadorEscolha = 0;
//calcula e retorna quem ganhou
//0-Empate;1-Jogador;2-Computador
function calcularEscolha(jogador, computador){
//pedra
if(jogador==1 && computador==1){ return 0; }
else if (jogador==1 && computador==2) { return 2; }
else if (jogador==1 && computador==3) { return 1; }
//papel
else if (jogador==2 && computador==1) { return 1; }
else if (jogador==2 && computador==2) { return 0; }
else if (jogador==2 && computador==3) { return 2; }
//tesoura
else if (jogador==3 && computador==1) { return 2; }
else if (jogador==3 && computador==2) {	return 1; }
else if (jogador==3 && computador==3) { return 0; }
}
//sorteia entre dois numeros
function sortear(min, max){
	return Math.floor(Math.random()*(max - min + 1))+min;
}
//somar pontos
function somarPontoJogador(){
	jogadorPontos++;
	document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}
function somarPontoComputador(){
	computadorPontos++;
	document.getElementById('computador-pontos').innerHTML = computadorPontos;
}
//textos
function mensagem(texto){
	document.getElementById('msgm').innerHTML = texto;
}
function definirNome(nome){
	document.getElementById('jogador-nome').innerHTML = nome;
}
function selecionar(tipo, escolha){
	document.getElementById(tipo+'-escolha'+escolha).classList.add('selecionado');
}
function deselecionar(tipo){
	document.getElementById(tipo+'-escolha1').classList.remove('selecionado');
	document.getElementById(tipo+'-escolha2').classList.remove('selecionado');
	document.getElementById(tipo+'-escolha3').classList.remove('selecionado');
}
//Escolha do usuario
//1-Pedra; 2-Papel; 3-Tesoura;
function jogar(escolha){
	jogadorEscolha = escolha;
	selecionar('jogador',jogadorEscolha);
	//sortear jogada do computador
	computadorEscolha = sortear(1,3);
	selecionar('computador',computadorEscolha);
	//calcular quem ganhou, somar pontos e exibir para o usuario
	var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
	if(ganhador==0){ mensagem('Empate!'); }
		else if (ganhador==1) {
			mensagem('Ponto para '+jogadorNome+'!');
			somarPontoJogador();
		}
		else if (ganhador==2) { 
			mensagem('Ponto para computador!');
			somarPontoComputador();
		}
	setTimeout(function() { 
		deselecionar('jogador');
		deselecionar('computador');
		mensagem(jogadorNome + ', escolha uma opção acima..');
	}, 2000);
}
document.getElementById('jogador-escolha1').onclick = function(){ jogar(1); };
document.getElementById('jogador-escolha2').onclick = function(){ jogar(2); };
document.getElementById('jogador-escolha3').onclick = function(){ jogar(3); };
//caso o nome do jogador seja null ou vazio
if(jogadorNome == null || jogadorNome == ''){
	jogadorNome = 'Jogador(a)';
}
definirNome(jogadorNome);
mensagem('Bem vindo(a) ' + jogadorNome + '! Você está preparado(a)? Escolha uma opção acima..');