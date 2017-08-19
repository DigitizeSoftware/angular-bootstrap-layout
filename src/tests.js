/**
 * Copyright (c) 2017 Digitize OÜ. Subject to MIT license.
 */

const angular = require('angular');
require('angular-mocks');
require('./main');

describe('ng-bootstrap-layout', function () {
    beforeEach(angular.mock.module('ng-bootstrap-layout'));
    
    require('./container/container.test');
});
