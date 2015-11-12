var root = {
	src: './assets',
	dest: './public/assets',
	bower: './bower_components',
	server: './public',
	site: './www'
};
var config = {
	harp: {
		path: root.server,
		port: 9000
	},
	browserSync: {
		proxy: 'localhost:9000',
		files: root.server + '/**'
	},
	styles: {
		watch: root.src + '/sass/**',
		src: root.src + '/sass/style.sass',
		dest: root.dest + '/css'
	},
	js: {
		dest: root.dest + '/js'
	},
	images: {
		src: root.src + '/img/**',
		dest: root.dest + '/img'
	}
};
config.root = root;

module.exports = config;