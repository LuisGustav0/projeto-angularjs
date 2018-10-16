angular.module( 'pdApp' )
  .config( config );

config.$inject = [ '$stateProvider' ];

function config( $stateProvider ) {

  var pesquisaUsuario = {
    name: 'pesquisaUsuario',
    url: '',
    templateUrl: 'app/views/usuario/pesquisa-usuario.html',
    resolve: {
      carregarController: function ( $ocLazyLoad ) {
        return $ocLazyLoad.load( 'app/views/usuario/pesquisa-usuario.controller.js' );
      }
    }
  };

  var cadastroUsuario = {
    name: 'cadastroUsuario',
    url: '/cadastro-usuario',
    templateUrl: 'app/views/usuario/cadastro-usuario.html',
    resolve: {
      carregarController: function ( $ocLazyLoad ) {
        return $ocLazyLoad.load( 'app/views/usuario/cadastro-usuario.controller.js' );
      }
    }
  };

  $stateProvider
    .state( 'pesquisaUsuario', pesquisaUsuario )
    .state( 'cadastroUsuario', cadastroUsuario );

};