import sprite from "gulp-svg-sprite"
import fs from "fs"
import { path, gulp } from "../config/app.js"

const iconsDir = path.src.svgIcons

const svgSpriteTask = folder => () => {
	const destFolder = `${path.srcFolder}/${path.imgFolder}/icons`
	if (!fs.existsSync(destFolder)) {
		fs.mkdirSync(destFolder)
	}
	return gulp
		.src(`${iconsDir}/${folder}/*.svg`, {})
		.pipe(
			sprite({
				mode: {
					stack: {
						sprite: `../${folder}-sprite.svg`,
					},
				},
			})
		)
		.pipe(gulp.dest(destFolder))
}

export const svgSprite = () => {
	const iconsFolders = fs.readdirSync(iconsDir)
	const tasks = iconsFolders.map(folder => {
		if (fs.lstatSync(`${iconsDir}/${folder}/`)) {
			console.log("task created", folder)
			return svgSpriteTask(folder)
		}
	})
	return gulp.series(tasks)
}
