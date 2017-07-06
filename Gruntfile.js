module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'dist/combined-babeled.js': 'dist/combined.js'
                }
            }
        },
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
                    'dist/combined.min.js': ['dist/combined-babeled.js']
                }
            }
        },
        watch: {
          css: {
            files: ['stylesheets/*'],
            tasks: ['concat:css', 'cssmin:css']
          },
          js: {
            files: ['javascripts/*'],
            tasks: ['concat:js', 'babel', 'uglify:js']
          }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'babel', 'uglify:js']);
};
