module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      build_toolkit:
        files: 'public/js/toolkit_v2.min.js': ['public/js/toolkit_v2.js']
      build_dev:
        files: 'public/js_dev/dev_v2.min.js': ['public/js_dev/dev_v2.js']


    concat:
      dist_toolkit:
        src: ['resources/lib/toolkit/*.js', 'resources/src/toolkit/*.js']
        dest: 'public/js/toolkit_v2.js'

      dist_dev:
        src: ['resources/lib/dev/*.js', 'resources/src/dev/*.js']
        dest: 'public/js_dev/dev_v2.js'


      options:
        separator: ';'

    ts:
      base:
        src: ['resources/src/**/*.ts']
        options:
          sourceMap: false

    compass:
      production:
        options:
          config: 'config_production.rb'

      develop:
        options:
          config: 'config_develop.rb'


    imageoptim:
      files: ['img']
      options:
        jpegMini: false
        imageAlpha: false
        quitAfter: false

    watch:
      ts:
        files: ['resources/src/**/*.ts']
        tasks: ['ts', 'concat', 'uglify', 'clean']
        options:
          atBegin: true

      css:
        files: ['resources/sass/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['resources/src/**/*.js', 'tscommand.tmp.txt']

    connect:
      server:
        options:
          port: 8000
          base: './'
          keepalive: true

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-ts')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-imageoptim')

  grunt.registerTask('default', ['ts', 'concat', 'uglify', 'clean', 'compass'])
  grunt.registerTask('css', ['compass:production', 'compass:develop'])
  grunt.registerTask('js', ['ts', 'concat', 'uglify', 'clean'])
  grunt.registerTask('optim', ['imageoptim'])
  grunt.registerTask('server', ['connect'])
