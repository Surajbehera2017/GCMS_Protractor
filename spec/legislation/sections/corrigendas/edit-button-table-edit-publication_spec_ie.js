var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LoginPage = require('../../../../po/login.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var corrigendas = require('../../../../po/document/display/legis/sections/corrigendas/corrigendas.po.js');
var loadedData = testData.legislation.sections.corrigendas;

describe('Corrigendas', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		corrigendas.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	afterEach(function(){//Close additional tab
		browser.getAllWindowHandles().then(function(handles) {
			browser.switchTo().window(handles[0]);
			for(var i=1;i<handles.length;i++){
				browser.switchTo().window(handles[i]).then(function () {
					browser.close();
				},function(error){
					browser.switchTo().window(handles[0]);
				});
			}
			browser.switchTo().window(handles[0]);
		});
	});

	// Method: TC01 - Corrigenda Edit button in table - Edit Publication
	it('Edit button in table - Edit Publication ',function(){
		browser.waitForAngular();
		corrigendas.clickViewAllLink();
		corrigendas.selectAndEditCorrigendas();
		browser.ignoreSynchronization = true; //going to non angular page
		corrigendas.clickonNewPublication();
		browser.sleep(5000);//Non-angular - sleep required
		corrigendas.clickonNewPublicationList();
		//Select Publication
		browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
				corrigendas.SelectPublication();
			});
			browser.switchTo().window(handles[0]);
			//Select series
			corrigendas.clickonSeriesList();
			browser.getAllWindowHandles().then(function(handles) {
				var newTabHandle = handles[1];
				browser.switchTo().window(newTabHandle).then(function () {
					corrigendas.selectSeries();
				});
				browser.switchTo().window(handles[0]);
				corrigendas.clickonOKButtonXML(); 
			});
		});

	});

});