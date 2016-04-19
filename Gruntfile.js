module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      app: {
        script: './index.js'
      }
    },

    shell: {
    	host:{
    		command: '/usr/local/bin/node \n console.log("hello");'
    	}
    },

    watch: {
     server: {
        files: ['./server/**/*.js',
        './Gruntfile.js', './index.js'],
        tasks: ['build']
      },
      client: {
        files: ['./client/**/*'],
        tasks: ['build:client']
      }
    },
	  concat: {
	    vendors: {
	      src: [
	        './node_modules/jquery/dist/jquery.min.js',
	        './node_modules/underscore/underscore-min.js'
	      ],
	      dest: './dist/vendors.js'
	    },
      clientJS: {
        src: ['./client/app.js'],
        dest: './dist/client.js'
      },
      clientHTML: {
        src: ['./client/index.html'],
        dest: './dist/index.html'
      }
      /*,
	    restart: {
	      src: [
	        './restart.js'
	      ],
	      dest: './restart.js'
	    },*/
	    // index: {
	    //   src: [
	    //     './app/index.html'
	    //   ],
	    //   dest: './dist/index.html'
	    // }
	  }




	});

	grunt.registerTask('build', [
    'concat'
	]);
  grunt.registerTask('build:client', [
    'concat:clientJS', 'concat:clientHTML' 
  ]);
/*	grunt.registerTask('build-restart', [
    'concat:restart'
	]);*/


};
