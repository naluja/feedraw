const nav = document.querySelector(".navbar")
const navLinks = nav.querySelectorAll(".nav-link")
const navList = nav.querySelector(".collapse")
const navBtn = nav.querySelector("button")
const year = document.querySelector(".year")

const toggleShadow = () => {
	if (window.scrollY >= 200) {
		nav.classList.add("shadow-bg")
	} else {
		nav.classList.remove("shadow-bg")
	}
}

const hideNav = () => {
    
    navList.classList.remove("show")
    navBtn.classList.add('collapsed')
}

const currentYear = () => {
    let currentTime = new Date().getFullYear()
    year.textContent = currentTime;
}


document.addEventListener("DOMContentLoaded", function () {
    currentYear()
	window.addEventListener("scroll", toggleShadow)

    navLinks.forEach(item => item.addEventListener("click", hideNav))
   
})

