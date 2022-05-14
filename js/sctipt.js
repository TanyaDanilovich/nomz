import * as data from "./data.js"
//console.dir(data.data[0].src[0]);

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


//Отображается доп изображение при наведении мышки в additional products

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

//Загрузка главного изображения
function loadMainImage(url) {
	MAIN_IMG.src = `${url}`
}
//Загрузка изображений в слайдер
function loadSmollSliderImage(url) {
	SMOLL_SLIDER.forEach((img, index) => {
		img.src = `${url[index]}`
	})
}

const MAIN_IMG = document.getElementById('mainImg');
const SMOLL_SLIDER = document.querySelectorAll(".smoll-slider-item");




window.addEventListener("DOMContentLoaded", function () {
	//loadMainImage("");
	//loadSmollSliderImage()




})