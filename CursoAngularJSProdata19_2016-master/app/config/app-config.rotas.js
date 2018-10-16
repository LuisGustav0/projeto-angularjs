/**
 * Created by LUIS GUSTAVO on 20/11/2016.
 */

angular.module( 'pdApp' ).config( config );

config.$inject = [ '$stateProvider' ];

function config( $stateProvider ) {

  var cadastroBairro = {
    name: 'cadastroBairro',
    url: '/',
    templateUrl: 'app/views/bairro/cadastro-bairro.html'
  };

  var vizualizarBairro = {
    name: 'vizualizarBairro',
    url: '/vizualizar-bairro',
    templateUrl: 'app/views/bairro/vizualizar-bairro.html'
  };

  $stateProvider
    .state( 'cadastroBairro', cadastroBairro )
    .state( 'vizualizarBairro', vizualizarBairro );
};
