module.exports = function (grunt) {
    // Config tasks and options
    grunt.initConfig({
        watch: {},
        jshint: {},
        concat: {},
        uglify: {},
        clean: {},
        express: {},
        concurrent: {}
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-concurrent');

    // Register tasks
    grunt.registerTask('build-server', []);
    grunt.registerTask('start-server', []);

    grunt.registerTask('default', ['build-server', 'start-server']);
};
