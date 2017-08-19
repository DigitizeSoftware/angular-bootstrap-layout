/**
 * Copyright (c) 2017 Digitize OÜ. Subject to MIT license.
 */

exports.name = 'container';
exports.fn = containerDirective;

function containerDirective() {
    return {
        transclude: true,
        replace: true,
        template: '<div class="container" ng-transclude></div>',
        compile: function (tElem, tAttrs) {
            var isFluid = tAttrs.fluid != null;
            tElem[0].removeAttribute('fluid');
            return function link(scope, elem) {
                if (isFluid) {
                    elem.removeClass('container');
                    elem.addClass('container-fluid');
                }
            }
        }
    };
}