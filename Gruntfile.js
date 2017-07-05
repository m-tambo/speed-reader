module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'stylesheets/*'
                ],
                dest: 'dist/combined.css'
            },
            js: {
                src: [
                    'javascripts/*'
                ],
                dest: 'dist/combined.js'
            }
        },
        cssmin: {
            css: {
                src: 'dist/combined.css',
                dest: 'dist/combined.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/combined.js': ['dist/combined.js']
                }
            }
        },
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};
