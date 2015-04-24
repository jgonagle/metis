module.exports = function(grunt) {
    'use strict';

    // Config tasks and options
    grunt.initConfig({
        wiredep: {},
        validation: {},
        scsslint: {},
        sass: {},
        autoprefixer: {},
        csslint: {},
        jscs: {},
        jshint: {},
        concat: {},
        cssmin: {},
        uglify: {},
        imagemin: {},
        karma: {},
        clean: {},
        express: {},
        open: {},
        watch: {},
        concurrent: {}
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    // Register tasks
    grunt.registerTask('build', []);
    grunt.registerTask('start', []);

    grunt.registerTask('default', ['build', 'start']);
};
