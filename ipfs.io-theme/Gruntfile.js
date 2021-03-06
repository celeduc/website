'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({

    stylus: {
      compile: {
        options: {
          use: [
            require('yeticss'),
            require('autoprefixer-stylus')
          ]
        },

        files: {
          'build/theme/css/main.css': ['_styl/main.styl'], //For built jade to use
          'static/css/main.css': ['_styl/main.styl'] //For actual template to use
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/theme/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/theme/css',
          ext: '.min.css'
        }, {
          expand: true,
          cwd: 'static/css',
          src: ['*.css', '!*.min.css'],
          dest: 'static/css',
          ext: '.min.css'
        }]
      }
    },

    jade: {
      target: {
        files: [{
          expand: true,
          cwd: '_jade',
          src: ['**/*.jade'],
          dest: 'build',
          ext: '.html'
        }],
        options: {
          pretty: true
        }
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'static/images',
          src: ['**'],
          dest: 'build/theme/images'
        }]
      }
    },

    watch: {
      build: {
        files: ['_styl/**', '_jade/**'],
        tasks: ['build'],
        options: {
          livereload: true,
          atBegin: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build',
          livereload: true,
          open: true,
          middleware: function (connect, options) {

            return [
              require('connect-livereload')(),
              connect.static(options.base[0])
            ];
          }
        }
      }
    }

  });

  grunt.registerTask('build', ['stylus', 'cssmin', 'jade', 'copy']);
  grunt.registerTask('serve', ['connect:server', 'watch']);
  grunt.registerTask('default', ['build']);
};
