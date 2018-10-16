(function () {
  angular.module( 'pdAppArquitetura', [] );

  angular.module( 'pdApp',
    [
      'ngMessages',
      'ngAnimate',
      'toastr',
      'ui.grid',
      'ngMaterial',
      'ui.router',
      'oc.lazyLoad',
      'LocalStorageModule',
      'angular-loading-bar',
      'ui.bootstrap',
      'pdAppArquitetura'
    ]
  ).config( config );

  config.$inject = [ 'cfpLoadingBarProvider' ];

  function config( cfpLoadingBarProvider ) {
    cfpLoadingBarProvider.includeSpinner = false;
  }
})();

