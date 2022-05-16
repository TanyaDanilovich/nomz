new Swiper('.image-slider', {
	//миниатюры для превью
	thumbs: {
		swiper: {
			//свайпер с миниатбрами и его настройки
			el: '.image-mini-slider',
			slidesPerView: 5,
			//SpaceBetween: 10,
		}

	},
});

(function () {
	const HEADER = document.querySelector(".header__container");
	const arrowUp = document.querySelector(".mobile-button-to-top");

	window.onscroll = () => {
		if (window.pageYOffset > 107) {
			HEADER.classList.add("header-opening");
			HEADER.classList.add("header-active");
		} else {
			HEADER.classList.remove("header-active")
			HEADER.classList.remove("header-opening")
		}
		if (window.pageYOffset > 1000) {
			arrowUp.classList.remove("hidden");
		} else {
			arrowUp.classList.add("hidden")
		}
	}
}());

//Изменение колличества товаров

const QUANTITY = document.getElementById('Quantity');
const MINUS = document.querySelector('.quantity__minus');
const PLUS = document.querySelector('.quantity__plus');

function addQuantity() {
	let value = +QUANTITY.value;
	value += 1;
	QUANTITY.value = value;
}

function subtractQuantity() {
	let value = +QUANTITY.value;
	(value > 1) ? value -= 1 : value = value;
	QUANTITY.value = value;
}
MINUS.addEventListener('touchstart', () => { subtractQuantity() });
PLUS.addEventListener('touchstart', () => { addQuantity() })
//END  Изменение колличества товаров


//Переключение одноразовой покупки или покупки с подпиской
const SUBSCRIBE = document.getElementById('subscribe-button');
const NOT_SUBSCRIBE = document.getElementById('without-subscribe');

SUBSCRIBE.addEventListener('touchstart', () => {
	SUBSCRIBE.classList.add('purchase-button-group-active');
	SUBSCRIBE.value = "true";
	NOT_SUBSCRIBE.classList.remove('purchase-button-group-active');
	NOT_SUBSCRIBE.value = "false";
	setTimeout(() => {
		document.querySelector(".subscription-details").classList.remove('hidden')
	}, 500)
	document.querySelector(".subscription-details").classList.add('opacity')
})

NOT_SUBSCRIBE.addEventListener('touchstart', () => {
	SUBSCRIBE.classList.remove('purchase-button-group-active');
	SUBSCRIBE.value = "false";
	NOT_SUBSCRIBE.classList.add('purchase-button-group-active');
	NOT_SUBSCRIBE.value = "true";
	document.querySelector(".subscription-details").classList.remove('opacity')
	setTimeout(() => {
		document.querySelector(".subscription-details").classList.add('hidden')
	}, 400)

})
//END  Переключение одноразовой покупки или покупки с подпиской


//Скрытие отображение таблицы

document.querySelector('.accordion__title').addEventListener('touchstart', () => {
	document.querySelector('.accordion-item__content').classList.toggle('opened')
	document.querySelector('.accordion-item__content').classList.toggle('opacity')
	document.querySelector('.accordion__title').classList.toggle('open')
})

//END Скрытие отображение таблицы

//Открытие спмска SELECT

const SELECT = document.querySelector(".sort__button__container");
const CATEGORIES = document.querySelector('.list-categories')
SELECT.addEventListener('touchstart', () => {
	CATEGORIES.classList.toggle('hidden')
})

//END Открытие спмска SELECT
console.dir(document.querySelector('.accordion__title'));