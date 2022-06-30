export const addRatingStars = () => {
	const ratingContainers =
		document.querySelectorAll<HTMLDivElement>("[data-rating]")

	ratingContainers.forEach(ratingItem => {
		const ratingAmount = Number(ratingItem.dataset.rating)
		if (isNaN(ratingAmount)) return

		for (let i = 0; i < ratingAmount; i++) {
			const isHalf = ratingAmount - i > 0 && ratingAmount - i < 1
			const starSvg = createStar(isHalf)
			ratingItem.append(starSvg)
		}
	})
}

function createStar(isHalf?: boolean) {
	const dPath = isHalf
		? "M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
		: "M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
	const fullStarPath = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"path"
	)
	svg.setAttributeNS(
		"http://www.w3.org/2000/xmlns/",
		"xmlns:xlink",
		"http://www.w3.org/1999/xlink"
	)
	svg.setAttribute("height", "20")
	svg.setAttribute("width", "20")

	fullStarPath.setAttributeNS(null, "d", dPath)
	fullStarPath.setAttribute("fill", "#FFC600")

	svg.append(fullStarPath)
	return svg
}
