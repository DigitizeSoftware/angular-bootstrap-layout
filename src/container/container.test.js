/**
 * Copyright (c) 2017 Digitize OÜ. Subject to MIT license.
 */

describe('container directive', function () {
    var $compile;
    var $rootScope;
    var $scope;
    
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));
    
    it('generates div element', function () {
        var element = $compile('<container></container>')($scope);
        expect(element[0].tagName).toBe('DIV');
    });
    
    it('sets "container" class for the element', function () {
        var element = $compile('<container></container>')($scope);
        expect(element.hasClass('container')).toBe(true);
    });
    
    it('sets "container-fluid" class if "fluid" attribute is provided', function () {
        var element = $compile('<container fluid></container>')($scope);
        expect(element.hasClass('container-fluid')).toBe(true);
        expect(element.hasClass('container')).toBe(false);
    });
    
    it('transcludes its content', function () {
        var element = $compile('<container><span>Some Content</span></container>')($scope);
        var child = element.children()[0];
        expect(child).not.toBeUndefined();
        expect(child.tagName).toBe('SPAN');
        expect(child.innerText).toBe('Some Content')
    });
});