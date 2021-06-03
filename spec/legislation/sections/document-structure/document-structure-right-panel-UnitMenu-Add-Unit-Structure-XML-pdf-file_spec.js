var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1609';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];
var path = require('path');
var uploadFolder = '../../../../test-data/qc/upload-files/';
var docFileToUpload = params.BU + '.originaltextimportpdf.PDF';



describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
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
	 *GCMSQABANG-1609: TC09 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - pdf file
	 * 
	 */
    
    it('Right Panel Document Structure Unit Menu Add a Unit from Structure using XML pdf file.'+jiraNumber, function () {
      
        // verify if Document Structure is diaplayed or not & click on document structure
		browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        browser.waitForAngular();
        browser.sleep(2000);

         //  verify if Unit is present or not
		var firstUnit = rightpanelpage.checkUnitIsPresent(loaded.unit);
         expect(firstUnit).toEqual(true);

        //right clicking on the expectedunit and selecting import from XML
        rightpanelpage.rightClickOnUnitAndSelectImportXML(loaded.unit);
        browser.waitForAngular();
        browser.sleep(2000);

      

        // upload file and verify if file is uploaded or not
        rightpanelpage.browseXMLFile(path.resolve(__dirname, uploadFolder+docFileToUpload));
        expect(rightpanelpage.isFileAddedForUploadingXMLFile(docFileToUpload)).toEqual(true);
        
        // // verify if multiple radio buttons are present or not
        var radio = rightpanelpage.isRadioButtonPresentBrowseXML();
         expect(radio).toEqual(true);
        
         /*click on upper-sibling to  save as different type  and
         verify if import button is disabled or not*/
         rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.upper);
         expect(rightpanelpage.isPopUpButtonEnabled(loaded.import)).toEqual(false);
          rightpanelpage.clickOnButtonForGlobal(loaded.cancel);
        
        
});
    
});
