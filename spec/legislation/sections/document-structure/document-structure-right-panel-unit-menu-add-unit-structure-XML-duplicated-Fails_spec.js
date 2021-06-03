var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1607';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var path = require('path');
var uploadFolder = '../../../../test-data/qc/upload-files/';
var docFileToUpload = params.BU + '.LAN-2015.102-spa-child.xml';


describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 

	/*
	 * GCMSQABANG-1607:TC06 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - Duplicated - Fails	 * 
	 */
    
    it(' Right Panel Document Structure Unit Menu Add a Unit from Structure using XML Duplicated Fails.'+ jiraNumber, function () {
        
       // verify if documnet structure is present and click after that if present
        browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);
        rightpanelpage.clickDocumentStructure();

       //  verify if Unit is present or not
        var firstUnit = rightpanelpage.checkUnitIsPresent(loaded.unit);
        expect(firstUnit).toEqual(true);

        // upload file and verify if file is uploaded or not
        rightpanelpage.rightClickOnUnitAndSelectImportXML(loaded.unit);
        rightpanelpage.browseXMLFile(path.resolve(__dirname, uploadFolder+docFileToUpload));
        expect(rightpanelpage.isFileAddedForUploadingXMLFile(docFileToUpload)).toEqual(true);
        
        // verify if multiple radio buttons are present or not
        var radio = rightpanelpage.isRadioButtonPresentBrowseXML();
        expect(radio).toEqual(true);
        
        //select upper-sibling radio button  and click import
        rightpanelpage.clickRadioButtonInAddUnitPopUp(loaded.upper);
        expect(rightpanelpage.isImageShowforUpperSibling()).toEqual(true);
       rightpanelpage.clickOnButtonForGlobal(loaded.import);

       // verify error modal displayed or not
       var error = rightpanelpage.isImportUnitXMLPopUPErrorDisplayed();
       expect(error).toEqual(true);

       //verify error message
        var getError = rightpanelpage.getTextImportpopupError();
        expect(getError).toContain(loaded.error);
      
        
        
});
    
});
