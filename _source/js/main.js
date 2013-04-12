// 5 Jan 2013, 2:37
$(function () {
	var menuLinks = $('.nav-item-wrap'),
		menuItens = $('.nav-item');

	// Ao clicar em um item do menu
	menuLinks.on('click', function () {
		_gaq.push(['_trackEvent', 'Links menu', 'click', 'Menu item ' + $(this).text().trim()]);
	});

	// Ao entrar em um item do menu, começa a contar o tempo
	menuLinks.on('mouseover', function () {
		var entrada = new Date(),
			nomeItem = $(this).text().trim();

		// Ao retirar o mouse do item
		menuLinks.on('mouseout.onMouseEnter', function () {
			var tempo = (new Date()).getTime() - entrada.getTime();

			// Se o tempo que permaneceu for maior que 1 segundo
			if (tempo > 1000) {
				// Registro
				_gaq.push(['_trackEvent', 'Links menu', 'Mouse enter', 'Item:' + nomeItem + ', tempo: ' + tempo]);
			}

			// Retiro o evento do mouseout
			menuLinks.off('mouseout.onMouseEnter');
		});
	});
});