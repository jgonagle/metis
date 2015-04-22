module.exports = function (grunt) {
    // Config tasks and options
    grunt.initConfig({
        watch: {},
        validation: {},
        scsslint: {},
        sass: {},
        autoprefixer: {},
        csslint: {},
        jshint: {},
        concat: {},
        uglify: {},
        cssmin: {},
        imagemin: {},
        clean: {},
        wiredep: {},
        karma: {},
        open: {},
        concurrent: {}
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-concurrent');

    // Register tasks
    grunt.registerTask('build-client', []);
    grunt.registerTask('start-client', []);

    grunt.registerTask('default', ['build-client', 'start-client']);
};
