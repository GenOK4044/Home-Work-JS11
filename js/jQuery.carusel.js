(function($) {
	
	$.fn.carusel = function() {

		var $body = $('body');
		var $leftButton = $('<span class="left">LEFT</span>');		/*создаем левую кнопку управления каруселью*/
		var $rightButton = $('<span class="right">RIGHT</span>');	/*создаем правую кнопку управления каруселью*/
		var currentLeftValue = 0;									/*текущее значение левого края*/
		var pixelsOffset = 220;										/*смещение пикселей (200 картинка + 20 марджин)*/
		var $caruselList = $('.carusel-list');
		var $caruselCount = $caruselList.find('li').length;			/*находим количесство ли (картинок)*/
		var minimumOffset = - (($caruselCount - 3) * pixelsOffset); /*длина ul который выходит за край(6картинок*220)*/
   		var maximumOffset = 0;

		$body.append($leftButton);									/*добавляем динамически в боди кнопки управления*/
		$body.append($rightButton);
   
   
    $rightButton.on('click', function() {        
        if (currentLeftValue != maximumOffset) {					/*если длина ul выходящего за край слева не равняется 0 - то сдвигаем вправо на 220*/
            currentLeftValue += 220;
            $caruselList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    $leftButton.on('click', function() {        
        if (currentLeftValue != minimumOffset) {					/*если длина ul выходящего за правый край не равна длине 6 картинок(тоесть некуда отступать) сдвигаем влево на 220*/
            currentLeftValue -= 220;
            $caruselList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
	
	return this;	
	}

})(jQuery);

