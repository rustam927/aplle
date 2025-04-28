

let topS 
let sphere = document.querySelectorAll(".sphere")
let score = document.querySelector(".score")
let point = 0
let second = document.querySelector(".second")
let seco = 10
second.innerHTML = seco
let aplle = ['2.png', '2.webp','1.webp']
let createBal = function() 
{
	let bal = document.createElement('div')
	document.body.appendChild(bal)
	bal.classList.add('sphere')
	randomX = Math.round(Math.random()*1300+50)
	bal.style.left = randomX + "px"
	bal.topS = 0
	randomImg = Math.round(Math.random()*2)
	bal.style.backgroundImage = "url(" + aplle[randomImg] + ")"


	let bottom = function()
	{
		bal.topS = bal.topS + 150
		bal.style.top = bal.topS + "px"
		if (bal.style.top >= "750px") {
		bal.style.display = "none"
	}
	bal.onclick = function() {
		bal.style.display = "none"
		point = point + 1
		score.innerHTML = point

	}
	}
	setInterval(bottom, 300)
	
}
	
 let cB = setInterval(createBal, 1000)
 


let sec = function() {
	seco = seco - 1
	second.innerHTML = seco
}

let ce = setInterval(sec, 1000)

let endGame = function() {
	clearInterval(cB)
	clearInterval(ce)
} 	
setTimeout(endGame, 10000)

 	


		