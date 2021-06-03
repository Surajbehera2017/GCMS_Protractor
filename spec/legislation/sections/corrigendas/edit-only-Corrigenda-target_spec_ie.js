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
		corrigendas.clickViewAllLink();
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

	// Method: TC02 - Corrigenda Edit button in table - Edit only Corrigenda-target
	it('Corrigenda Edit button in table - Edit only Corrigenda-target',function(){
		browser.ignoreSynchronization = true; //going to non angular page
		corrigendas.selectAndEditCorrigendas();
		corrigendas.clickonXMLTag();
		browser.sleep(3000);//Non-angular - sleep required
		browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
				corrigendas.clickonXMLEditPage();
				corrigendas.enterNewXMLinEditPage(loadedData.xml);
				corrigendas.clickonOKButtonXML(); 
			});
			browser.switchTo().window(handles[0]);
			corrigendas.clickonOKButtonXML();
		});

	});

});