angular.module('app', ['templates'])
.config([
  '$httpProvider', function($httpProvider) {
    return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
])
.run(function() {
  return console.log('angular app running');
});
