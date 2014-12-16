module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      all: ['Gruntfile.js', 'server.js', 'routes/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};

