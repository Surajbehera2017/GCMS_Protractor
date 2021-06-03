var WIPPage = require('./wip.po.js');

var RelationshipSearch = function () {
	this.get = function () { 
        
        //return browser.get('sso/logon.do'); 
          return browser.get('static/gcms-ui/index.html#/consolidation/search');
                          
        };
};

RelationshipSearch.prototype = Object.create({}, {
	

});

module.exports = RelationshipSearch;
