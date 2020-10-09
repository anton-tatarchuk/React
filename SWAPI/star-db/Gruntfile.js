module.exports = function(grunt) {

  // 1. Вся настройка находится здесь
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),



      less: {
          production: {
              files: {"public/styles.css": "src/less/styles.less"},
          }
      },
      watch: {
          styles: {
              files:["src/less/*.less"],
              tasks:['less']
          }
      }


  });

  // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
  grunt.registerTask('default', [ /*'uglify',*/'less']);

};
