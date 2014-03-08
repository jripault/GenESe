module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /templates\//
                },
                files: {
                    "build/templates.js": ["templates/**/*.hbs"]
                }
            }
        },
        watch: {
            build: {
                files: ['js/**/*.js', 'index.html'],
                tasks: ['concat']
            },
            emberTemplates: {
                files: ['templates/**/*.hbs'],
                tasks: ['emberTemplates']
            }
        },
        concat: {
            javascript: {
                src: ['js/*.js', 'js/models/*enerator.js', 'js/models/field.js', 'js/models/index.js', 'js/models/esnode.js',
                 'js/controllers/*.js', 'js/views/*.js'],
                dest: 'build/application.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task(s).
    grunt.registerTask('default', ['emberTemplates']);
};