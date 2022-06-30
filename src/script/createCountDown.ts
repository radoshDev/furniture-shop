type Time = {
	seconds: number
	minutes: number
	hours: number
	days: number
}

const circleSize = 207
const MAX_TIME: Time = {
	seconds: 60,
	minutes: 60,
	hours: 24,
	days: 365,
}

export const createCountDown = (timeStamp: number) => {
	const daysSvg = document.getElementById("count-down-item-days")!
	const textDaysEl = daysSvg.querySelector("text")!
	const countedDaysEl = daysSvg.querySelector("circle.counted")! as SVGCircleElement
	const hoursSvg = document.getElementById("count-down-item-hours")!
	const textHoursEl = hoursSvg.querySelector("text")!
	const countedHoursEl = hoursSvg.querySelector("circle.counted")! as SVGCircleElement
	const minutesSvg = document.getElementById("count-down-item-minutes")!
	const textMinutesEl = minutesSvg.querySelector("text")!
	const countedMinutesEl = minutesSvg.querySelector("circle.counted")! as SVGCircleElement
	const secondsSvg = document.getElementById("count-down-item-seconds")!
	const textSecondsEl = secondsSvg.querySelector("text")!
	const countedSecondsEl = secondsSvg.querySelector("circle.counted")! as SVGCircleElement

	const countDown = setInterval(() => {
		const seconds = Math.floor(timeStamp / 1000) % 60
		const minutes = Math.floor(timeStamp / 1000 / 60) % 60
		const hours = Math.floor(timeStamp / 1000 / 60 / 60) % 24
		const days = Math.floor(timeStamp / 1000 / 60 / 60 / 24)

		tick(textSecondsEl, countedSecondsEl, "seconds", seconds)
		tick(textMinutesEl, countedMinutesEl, "minutes", minutes)
		tick(textHoursEl, countedHoursEl, "hours", hours)
		tick(textDaysEl, countedDaysEl, "days", days)
		timeStamp -= 1000

		if (timeStamp < 0) {
			clearInterval(countDown)
		}
	}, 1000)
}

function tick(
	textElement: SVGTextElement,
	countedElement: SVGCircleElement,
	timeType: keyof Time,
	time: number
) {
	const step = circleSize / MAX_TIME[timeType]
	textElement.innerHTML = time.toString()
	const offset = step * time + circleSize
	countedElement.style.strokeDashoffset = `${offset > circleSize * 2 ? circleSize * 2 : offset}px`
}
