/**
 * Created by LUIS GUSTAVO on 12/11/2016.
 */
angular.module( 'pdApp' ).filter( 'maiusculo', maiusculo );

function maiusculo() {
  return function ( input ) {
    if( !input ) {
      return '';
    }
    return input.toUpperCase();
  }
}