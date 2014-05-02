module.exports = function(grunt) {

  // All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      dist: {
        files: {
          'public/css/global.css' : 'public/css/global.css'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'js/plugins.js',
          'js/main.js'
          ],
        dest: 'public/js/global.js',
      }
    },
    uglify: {
      build: {
        src: 'public/js/global.js',
        dest: 'public/js/global.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'nested'
        },
        files: {
          'public/css/global.css' : 'css/global.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['public/*.html', 'public/*/*.html']
      }
    }

  });

  // Grunt Plugins to use
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify', 'watch']);

};

//   jLdkslkd92lkds
