var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var grantSubsidiesSection = require('../../../../po/document/edition/legis/sections/grants-subsidies/grants-subsidies.po.js');
var grantsSubsidies= require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var legisDocDisplayPage=new LegislationDocumentDisplayPage();
var loadedData = testData.legislation.sections.grants_subsidies;

describe('Grants and Subsidies', function () {

	beforeEach(function () {
        
        browser.ignoreSynchronization = false;
        legisDocDisplayPage.get(loadedData.marginal_id_1);
        browser.waitForAngular();
		grantsSubsidies.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
       
//03 - Grants and subsidies - only available for Legislation and Otras Disposiciones

	it('should verify that Grants and subsidies section is only available for Legislation and Otras Disposiciones', function () {
		
		expect(grantsSubsidies.isGrantsAndSubsidiesSectionDisplayed()).toBeFalsy();
	});
});

});