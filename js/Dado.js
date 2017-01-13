/**
 *
 * Objeto Literal Dado
 * para setar o eventos
 * @author Edy Segura, edy@segura.pro.br
 *
 */
 
var Dado = {
	
	lancarDados: function() {
		/*
			o método Math.random() gera um número pseudo randomico
			de 0 até 1. ex: 0.5 ou 0.9 ou 1
			É multiplicado por 6 porque queremos somente números de
			1 a 6
			É somado por 1 porque não queremos o número 0
		*/
		return parseInt(1 + Math.random() * 6);
	}
	
};