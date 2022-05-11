(function () {
	const HEADER = document.querySelector(".header__container");
	window.onscroll = () => {
		//console.log(window.pageYOffset);

		if (window.pageYOffset > 140) {
			HEADER.classList.add("header-active")
		} else (
			HEADER.classList.remove("header-active")
		)
	}
}());

const CARD_1 = document.querySelector('#additional-card-1')
const IMG_1 = document.querySelector("#additional-image-12")
CARD_1.addEventListener('mouseover', () => {

	IMG_1.classList.add('background-additional-image-active')
})
CARD_1.addEventListener('mouseout', () => {

	IMG_1.classList.remove('background-additional-image-active')
})

const CARD_2 = document.querySelector('#additional-card-2')
const IMG_2 = document.querySelector("#additional-image-22")
CARD_2.addEventListener('mouseover', () => {

	IMG_2.classList.add('background-additional-image-active')
})
CARD_2.addEventListener('mouseout', () => {

	IMG_2.classList.remove('background-additional-image-active')
})

const CARD_3 = document.querySelector('#additional-card-3')
const IMG_3 = document.querySelector("#additional-image-32")
CARD_3.addEventListener('mouseover', () => {

	IMG_3.classList.add('background-additional-image-active')
})
CARD_3.addEventListener('mouseout', () => {

	IMG_3.classList.remove('background-additional-image-active')
})

