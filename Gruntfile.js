module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'css/*'
                ],
                dest: 'combined.css'
            },
            js: {
                src: [
                    'js/*'
                ],
                dest: 'combined.js'
            }
        },
        cssmin: {
            css: {
                src: 'combined.css',
                dest: 'combined.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'combined.js': ['combined.js']
                }
            }
        },
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};
