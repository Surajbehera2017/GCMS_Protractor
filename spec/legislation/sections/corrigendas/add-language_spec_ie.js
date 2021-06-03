var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var corrigendasSection = require('../../../../po/document/display/legis/sections/corrigendas/corrigendas.po.js');
var loadedData = testData.legislation.sections.corrigendas;

describe('Corrigendas', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		corrigendasSection.urlLoad(params.valid_username,params.valid_password);
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

	// Method: TC03 - Corrigenda Edit button in table -Adding language
	it('Filter Corrigenda Internationalization ',function(){

		browser.waitForAngular();
		expect(corrigendasSection.displayViewAllLink()).toEqual(true);
		corrigendasSection.clickViewAllLink();
		browser.waitForAngular();
		corrigendasSection.selectAndEditCorrigendas();
		browser.ignoreSynchronization = true; //Non-angular page
		corrigendasSection.clickonNewLanguageButton();
		browser.sleep(1000);
		corrigendasSection.clickonAddNewLanguage();
		browser.waitForAngular();
		browser.getAllWindowHandles().then(function(handles) {
			var newTabHandle = handles[1];
			browser.switchTo().window(newTabHandle).then(function () {
				corrigendasSection.SelectLanguage();
			});

			browser.switchTo().window(handles[0]);

			corrigendasSection.clickonIncorporatedDropdown();
			corrigendasSection.selectDropdownIncorporated(0);

		});
		corrigendasSection.clickonOKButtonXML();
	});
});