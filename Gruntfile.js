'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      test: 'npm test',

      jshint: 'node_modules/.bin/jshint .',
      jslint: 'find . -type d -name node_modules -prune -o -type d -name bower_components -prune -o -type f -name "*[-.]min.js" -prune -o -type f -name "*.bat" -prune -o -type f \\( -wholename "*/bin/*" -or -name "*.js" \\) -exec node_modules/.bin/jslint {} \\;',
      eslint: 'node_modules/.bin/eslint .',
      lili: 'bundle exec lili .',
      editorconfig: 'find . -type f -name Thumbs.db -prune -o -type f -name .DS_Store -prune -o -type d -name .git -prune -o -type d -name .svn -prune -o -type d -name tmp -prune -o -type d -name bin -prune -o -type d -name target -prune -o -name "*.app*" -prune -o -type d -name node_modules -prune -o -type d -name bower_components -prune -o -type f -name "*[-.]min.js" -prune -o -type d -name "*.dSYM" -prune -o -type f -name "*.scpt" -prune -o -type d -name "*.xcodeproj" -prune -o -type d -name .vagrant -prune -o -type f -name .exe -prune -o -type f -name "*.o" -prune -o -type f -name "*.pyc" -prune -o -type f -name "*.hi" -prune -o -type f -name "*.beam" -prune -o -type f -name "*.png" -prune -o -type f -name "*.gif" -prune -o -type f -name "*.jp*g" -prune -o -type f -name "*.ico" -prune -o -type f -name "*.ttf" -prune -o -type f -name "*.zip" -prune -o -type f -name "*.jar" -prune -o -type f -name "*.dot" -prune -o -type f -name "*.pdf" -prune -o -type f -name "*.wav" -prune -o -type f -name "*.mp[34]" -prune -o -type f -name "*.svg" -prune -o -type f -name "*.flip" -prune -o -type f -name "*.class" -prune -o -type f -name "*.jad" -prune -o -type d -name .idea -prune -o -type f -name "*.iml" -prune -o -type f -name "*.log" -prune -o -type f -name "*" -exec node_modules/.bin/editorconfig-tools check {} \\;'
    },
    uglify: {
      options: {
        mangle: true
      },
      range: {
        files: {
          'dist/range.min.js': ['lib/range.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['exec:test']);

  grunt.registerTask('test', ['exec:test']);

  grunt.registerTask('lint', [
    'exec:jshint',
    // Go to bed, Crockford
    // 'exec:jslint',
    'exec:eslint',
    'exec:lili',
    'exec:editorconfig'
  ]);

  grunt.registerTask('getsize', function () {
    var size = require('fs').statSync('dist/range.min.js').size;
    grunt.log.writeln('range.min.js size is ' + size + ' bytes');
  });
  grunt.registerTask('size', 'get size of script previously minified', ['uglify', 'getsize']);

  grunt.registerTask('jshint', ['exec:jshint']);
  grunt.registerTask('jslint', ['exec:jslint']);
  grunt.registerTask('eslint', ['exec:eslint']);
  grunt.registerTask('lili', ['exec:lili']);
  grunt.registerTask('editorconfig', ['exec:editorconfig']);
};
