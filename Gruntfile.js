module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      all: ['Gruntfile.js', 'server.js', 'routes/**/*.js']
    },
    hapi: {
      custom_options: {
        options: {
          server: require('path').resolve('./server')
        }
      }
    },
    mocha_casperjs: {
      options: {
        reporter: 'spec',
        site: 'http://localhost:3000'
      },
      files: {
        src: ['_tests/casper/**/*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-hapi');

  grunt.registerTask('default', ['jshint', 'hapi', 'mocha_casperjs']);
};
