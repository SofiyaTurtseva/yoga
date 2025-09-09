import gulp from 'gulp';
import { plugins } from '../config/plugins.js';
import { filePaths } from '../config/paths.js';
import { logger } from '../config/logger.js';

export const videos = (isBuild, serverInstance) => {
	return gulp.src(filePaths.src.videos, { encoding: false })
		.pipe(logger.handleError('VIDEOS')) // лог ошибок
		.pipe(plugins.newer(filePaths.build.videos)) // копировать только новые
		.pipe(gulp.dest(filePaths.build.videos)) // положить в dist
		.pipe(serverInstance ? serverInstance.stream() : plugins.noop()); // обновить browserSync
};