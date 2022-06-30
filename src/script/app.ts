import { isWebp } from "./utils/isWebp"
import { burgerMenu } from "./burgerMenu"
import { addRatingStars } from "./addRatingStars"
import { handleSliders } from "./handleSliders"
import { createCountDown } from "./createCountDown"

isWebp()
burgerMenu()
addRatingStars()
handleSliders()

createCountDown(25 * 60 * 60 * 1000)
