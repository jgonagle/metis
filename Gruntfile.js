module.exports = function (grunt) {
    // Config tasks and options
    grunt.initConfig({
        concurrent: {
            build: {
                tasks: ['build-server', 'build-client']
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-concurrent');

    // Load client and server Grunt tasks
    grunt.loadTasks('src/client/Gruntfile.js');
    grunt.loadTasks('src/server/Gruntfile.js');

    // Register tasks
    grunt.registerTask('build-all', ['concurrent:build']);
    grunt.registerTask('start-all', ['start-server', 'start-client']);

    grunt.registerTask('default', ['build-all', 'start-all']);
};
