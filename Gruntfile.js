
module.exports = function(grunt) {

	grunt.initConfig({
  concat: {
    js: {
      src: ['PracticeLayout/javascript.js'],
      dest: 'build/js/scripts.js',
    },
    css: {
    	src: ['PracticeLayout/layoutCSS_v2.css'],
    	dest: 'build/css/styles.css'
    }
  },
  watch: {
  	js: {
    	files: ['**/*.js'],
    	tasks: ['concat'],
    },
    css: {
    	files: ['**/*.css'],
    	tasks: ['concat'],
  },
},

});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

};