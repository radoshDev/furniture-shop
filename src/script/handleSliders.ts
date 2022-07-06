import Splide from "@splidejs/splide"

Splide.defaults = {
	classes: {
		arrow: "splide__arrow icon-btn fill",
		prev: "splide__arrow--prev prev",
		next: "splide__arrow--next next",
	},
	pagination: false,
}
export const handleSliders = () => {
	document.addEventListener("DOMContentLoaded", function () {
		const sellProductsSlider = new Splide("#sell-products-slider", {
			perPage: 5,
			perMove: 1,
			gap: "5.7rem",
			breakpoints: {
				1500: {
					perPage: 4,
				},
				1200: {
					perPage: 3,
				},
				900: {
					perPage: 2,
				},
				600: {
					perPage: 1,
				},
			},
		})
		const starProductsSlider = new Splide("#star-products-slider", {
			perPage: 4,
			perMove: 1,
			gap: "22px",
			breakpoints: {
				1600: {
					perPage: 3,
				},
				1000: {
					perPage: 2,
				},
				550: {
					perPage: 1,
				},
			},
		})
		sellProductsSlider.mount()
		starProductsSlider.mount()
	})
}
