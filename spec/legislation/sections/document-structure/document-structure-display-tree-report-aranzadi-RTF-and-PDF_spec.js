var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNumber = 'GCMSQABANG-1728';
var jiraNumber_1 = 'GCMSQABANG-1729';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];
 

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id_xml);
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
	 * TC01 -Display Tree report - Aranzadi - PDF
	 * GCMSQABANG-1728
	 */
	
	 
	
	it('Display Tree report Aranzadi PDF.' + jiraNumber+'.'+jiraNumber_1, function () {
		
		browser.waitForAngular();
		var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
		 expect(structure).toEqual(true);
		 rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		 rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expectedAction)
		//  var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
		//  expect(structure).toEqual(true);

		 
		//  var exportPDF = rightpanelpage.isExportStructurePDFOptionPresent();
		// expect(exportPDF).toEqual(true);


		// browser.waitForAngular();
        // var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        // expect(structure).toEqual(true);
		// rightpanelpage.clickDocumentStructure();
        // rightpanelpage.clickStructureActions();
        // var exportPDF = rightpanelpage.isExportStructurePDFOptionPresent();
		// expect(exportPDF).toEqual(true);
		
               
  });
    
    
    
	/*
	 * TC02 -Display Tree report - Aranzadi - RTF
	 * GCMSQABANG-1729
	 */
	
	it('Display Tree report Aranzadi RTF' + jiraNumber_1.link(params.jiraURL +jiraNumber_1), function () {
		
		browser.waitForAngular();
		var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
		 expect(structure).toEqual(true);
		 rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		 rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expectedAction_1);
		               
  });
});
