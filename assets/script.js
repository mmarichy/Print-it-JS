const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Images banner */
let idx = 0

function myIMG  () {
	let imgban = document.querySelector(".banner-img")
	imgban.src = "./assets/images/slideshow/" + slides[idx].image
	let myP = document.querySelector(".myp")
	myP.innerHTML = slides[idx].tagLine
	for (i = 0; i < dots.length; i++){
		dots[i].classList.remove('dot_selected')
	}
	dots[idx].classList.add('dot_selected')
	// console.log(imgban)
	// console.log(dots[idx])
	// console.log(dots)
}

/* Flèches de direction */
const arrowL = document.createElement('img')
arrowL.classList.add('arrow')
arrowL.classList.add('arrow_left')
arrowL.src = "./assets/images/arrow_left.png"

arrowL.addEventListener("click", function(){
	idx = idx - 1
	if (idx === -1){
		idx = slides.length - 1
	}
	myIMG()
})

const arrowR = document.createElement('img')
arrowR.classList.add('arrow')
arrowR.classList.add('arrow_right')
arrowR.src = "./assets/images/arrow_right.png"

arrowR.addEventListener("click", function(){
	idx = idx + 1
	console.log(idx)
	if (idx === slides.length){
		idx = 0
	}
	myIMG()
})

let banner = document.querySelector('#banner')
banner.appendChild(arrowL)
banner.appendChild(arrowR)
/* dots*/

let dotContainer = document.querySelector('.dots')
/*dots par slides */
slides.forEach((slide) => { 
	let dot = document.createElement("div")
	dot.classList.add("dot")
	dotContainer.appendChild(dot)
	// console.log(slide)
})

let dots = document.querySelectorAll('.dot')
myIMG() 
