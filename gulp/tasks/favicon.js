import favicons from "gulp-favicons"
import filter from "gulp-filter"
import { path, gulp, plugins } from "../config/app.js"

export const favicon = () => {
	return gulp
		.src(path.favicon.src)
		.pipe(gulp.dest(path.favicon.dest))
		.pipe(
			favicons({
				icons: {
					favicon: true,
					appleIcon: true,
					android: true,
					windows: false,
					yandex: false,
					coast: false,
					firefox: false,
					appleStartup: false,
				},
				path: "images/favicon/",
			})
		)
		.pipe(gulp.dest(path.favicon.dest))
		.pipe(filter(["favicon.ico", "apple-touch-icon.png", "manifest.json"]))
		.pipe(gulp.dest(path.buildFolder))
		.pipe(plugins.browserSync.stream())
}
