export const burgerMenu = () => {
	const menuBurger = document.getElementById("menu-burger")
	const navigation = document.getElementById("navigation")

	if (!menuBurger) throw new Error("#menu-burger not defined")
	if (!navigation) throw new Error("#navigation not defined")

	menuBurger.addEventListener("click", function () {
		this.classList.toggle("opened")
		this.setAttribute("aria-expanded", `${this.classList.contains("opened")}`)
		navigation.classList.toggle("opened")
		document.body.classList.toggle("mobile-menu")
	})
}
