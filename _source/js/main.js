'use strict';

;(function () {

	if (!!sessionStorage._nativebuild_header_sucks) {
		return false;
	}

	// Animação do nome do blog
	var $h1 = document.querySelector('.header-entrada h1'),
		text = $h1.innerText || $h1.textContent,
		$key, i = 0;

	$h1.removeChild($h1.firstChild);
	sessionStorage._nativebuild_header_sucks = ':)';

	var time = setInterval(function () {
		$key = document.createElement('span');
		$key.innerHTML = text[i];

		$h1.appendChild($key);

		if (!!text[i + 1]) {
			i++;
		} else {
			clearInterval(time);
		}
	}, 150);
}());

(function () {

  var $articles = document.querySelectorAll('.container-custom article'),
      delay;

  [].forEach.call($articles, function (element, i) {
    delay = 250 * i;

    element.setAttribute('style', '-webkit-animation-delay: ' + delay + 'ms;' +
                                  '-moz-animation-delay: ' + delay + 'ms;' +
                                  'animation-delay: ' + delay + 'ms;');

    element.classList.add('animate');
  });
}());
