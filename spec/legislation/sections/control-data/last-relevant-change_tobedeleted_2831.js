var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var controldatasection = require('../../../../po/document/edition/legis/sections/control-data/control-data.po.js');
var loadedData = testData.legislation.sections.control_data;
var legisDocDisplayPage = new LegislationDocumentDisplayPage();


describe('Control Data', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		controldatasection.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	//Method: TC03 - Control Data - Display last relevant change only for Arz and Gulf - ARZ - Add
	it('Display last relevant change only for Arz and Gulf - ARZ - Add', function () {

		legisDocDisplayPage.clickAddButton;
		legisDocDisplayPage.selectcode(loadedData.document_code);
		legisDocDisplayPage.clickcalculate;
		legisDocDisplayPage.clickadd;
		browser.waitForAngular();
		controldatasection.clickonGeneralData();
		controldatasection.clickonDocumentTypeDropdown();
		controldatasection.selectDocumentTypeFromComboBox(1);

	});

});
