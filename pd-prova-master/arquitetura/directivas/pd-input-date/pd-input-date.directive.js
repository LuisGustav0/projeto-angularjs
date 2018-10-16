(function () {
    'use strict';

    angular.module('pdAppArquitetura')
        .directive('pdInputDate',pdInputDate);

    function pdInputDate() {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-input-date/pd-input-date.html',
            scope:{
                label:'@',
                placeholder : '@',
                ngModel: '=',
                colspan:'@'
            },
            link:link
        };
        function link(scope,element,attrs) {
            scope.idInputText = 'pdInputText' + scope.$id;
            scope.classColspan = 'col-md-'+ (scope.colspan || '3');
        }
    }
})();