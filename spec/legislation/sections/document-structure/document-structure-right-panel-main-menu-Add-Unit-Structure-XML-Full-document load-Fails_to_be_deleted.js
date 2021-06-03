var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var path = require('path');
var uploadFolder = '../../../../test-data/qc/upload-files/';
var docFileToUpload = params.BU +'.GCMSQABANG-1613.xml';
var jiraNumber='GCMSQABANG-1613';
var testData = require('../../../../test-data/Jira_TestData/'+jiraNumber+'.js');
var loadedData=testData[params.env][params.BU];


describe('Document-structure', function () {

    beforeAll(function () {
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);
	});
 

	/*
	 *GCMSQABANG-1613: TC05 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - Full document load -  Fails
	 * 
	 */
    
    it('Right Panel Document Structure Unit Menu Add a Unit from Structure using XML Full document load Fails.'+jiraNumber, function () {


        
        browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);

       //  verify if Unit is present or not
		rightpanelpage.clickDocumentStructure();
        var firstUnit = rightpanelpage.checkUnitIsPresent(loadedData.unit_Name);
        expect(firstUnit).toEqual(true);

        // upload file and verify if file is uploaded or not
        rightpanelpage.rightClickOnUnitAndSelectImportXML(loadedData.unit_Name,loadedData.version);
        browser.sleep(2000);
        rightpanelpage.browseXMLFile(path.resolve(__dirname, uploadFolder+docFileToUpload));
        browser.sleep(2000);
        expect(rightpanelpage.isFileAddedForUploadingXMLFile(docFileToUpload)).toEqual(true);
        
        // verify if multiple radio buttons are present or not
        var radio = rightpanelpage.isRadioButtonPresentBrowseXML();
         expect(radio).toEqual(true);
        
         //select child radio button  and click import
         rightpanelpage.clickRadioButtonInAddUnitPopUp(loadedData.sibiling);
    
         rightpanelpage.clickOnButtonForGlobal(loadedData.import_button);
         browser.sleep(2000);

       //verify error message
        var getError = rightpanelpage.getTextImportpopupError();
      //  expect(errorContains).toEqual(loadedData.import_xml_error);
        rightpanelpage.clickOnButtonForGlobal(loadedData.ok_button);
        
       });
    
});
