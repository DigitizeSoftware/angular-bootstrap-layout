/**
 * Copyright (c) 2017 Digitize OÜ. Subject to MIT license.
 */

const angular = require('angular');
const module = angular.module('ng-bootstrap-layout', []);

const directive = createDirectiveRegisterer(module);
directive(require('./container/container'));

function createDirectiveRegisterer(module) {
    return function registerDirective(config) {
        module.directive(config.name, config.fn);
    };
}
