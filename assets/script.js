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

let arrowL = document.createElement('img')
arrowL.classList.add('arrow')
arrowL.classList.add('arrow_left')
arrowL.src = "./assets/images/arrow_left.png"

arrowL.addEventListener("click", function(){
	console.log("coucou arol")
})

let arrowR = document.createElement('img')
arrowR.classList.add('arrow')
arrowR.classList.add('arrow_right')
arrowR.src = "./assets/images/arrow_right.png"

arrowR.addEventListener("click", function(){
	console.log("coucou aror")
})
let banner = document.querySelector('#banner')
banner.appendChild(arrowL)
banner.appendChild(arrowR)