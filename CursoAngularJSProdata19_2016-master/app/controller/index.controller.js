/**
 * Created by LUIS-GUSTAVO on 21/11/2016.
 */

angular.module( 'pdApp' ).run( iniciarRootScope );

function iniciarRootScope( $rootScope ) {
  $rootScope.entidade = {};
  $rootScope.entidadeSelecionada = {};
  $rootScope.listaBairros = [];
};