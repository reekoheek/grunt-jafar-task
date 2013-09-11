/*
 * grunt-jafar-task
 * https://github.com/reekoheek/grunt-jafar-task
 *
 * Copyright (c) 2013 Jafar Shadiq
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {


    grunt.registerMultiTask('fetchDeps', 'Jafar\'s fetch dependencies task', function() {
        if (this.target === 'bower') {
            grunt.loadTasks('node_modules/grunt-jafar-task/node_modules/grunt-bower-task/tasks');

            grunt.config('bower', {
                install: {
                    options: {
                        copy: false
                    }
                }
            });
            grunt.task.run('bower');
        }
    });

};
