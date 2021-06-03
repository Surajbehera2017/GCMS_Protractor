var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1594'
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];
var path = require('path');
var uploadFolder = '../../../../test-data/qc/upload-files/';
var docFileToUpload = params.BU + '.originaltextimportword.doc';


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
	 *GCMSQABANG-1608 and 1594: TC08 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - word file	 * 
	 */
    
    it('Add a Unit from Structure using XML word file.'+jiraNumber, function () {
     
        // verify if Document Structure is diaplayed or not
		browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);

       //  verify if Unit is present or not
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        var firstUnit = rightpanelpage.checkUnitIsPresent(loaded.unit_a);
        expect(firstUnit).toEqual(true);

        // upload file and verify if file is uploaded or not
        rightpanelpage.rightClickOnUnitAndSelectImportXML(loaded.unit_a);
        rightpanelpage.browseXMLFile(path.resolve(__dirname, uploadFolder+docFileToUpload));
        expect(rightpanelpage.isFileAddedForUploadingXMLFile(docFileToUpload)).toEqual(true);
        
        // verify if multiple radio buttons are present or not
        var radio = rightpanelpage.isRadioButtonPresentBrowseXML();
        expect(radio).toEqual(true);
        
        //verify if import button is disabled or not
        rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.upper);
        browser.sleep(1000);
         expect(rightpanelpage.isPopUpButtonEnabled(loaded.import)).toEqual(false);
         browser.sleep(1000);
         rightpanelpage.clickOnButtonForGlobal(loaded.cancel);
        
        
});
    
});
