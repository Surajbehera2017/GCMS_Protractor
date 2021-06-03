var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData =  testData.legislation.sections.document_structure;

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	afterEach(function () {//Close additional tab
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]);
            for (var i = 1; i < handles.length; i++) {
                browser.switchTo().window(handles[i]).then(function () {
                    browser.close();
                }, function (error) {
                   browser.switchTo().window(handles[0]);
                });
            }
            browser.switchTo().window(handles[0]);
        });
    });


	/*
	 * GCMSQABANG-3634:02 - Context Index - Entries for a full document
	 */
	it('Analysis Column Context Index', function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		//Verify multiple structure versions displayed
		var srtructureVersions = rightpanelpage.isMultipleStructureVersionsDisplayed();
		expect(srtructureVersions).toEqual(true);
		
		//Verify inForce Structure displayed
		var inForceStructure = rightpanelpage.isInForceStructureDisplayed();
		expect(inForceStructure).toEqual(true);
		
		//Verify Context Index note icons displayed in analysis column
		var ciIcon = rightpanelpage.isContextIndexIconDisplayed();
		expect(ciIcon).toEqual(true);
		browser.waitForAngular();
		
		
		//Click CI Icon & VerifyCI Table is displayed
		rightpanelpage.clickContextIndexIconForUnit();
		var ciTable = rightpanelpage.isContextIndexTableDisplayed();
		expect(ciTable).toEqual(true);
		
		
	});
	
});







