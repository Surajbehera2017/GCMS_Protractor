var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var path = require('path');
var uploadFolder = '../../../../test-data/qc/upload-files/';
var docFileToUpload = params.BU +'.GCMSQABANG-1604.xml';
jiraNumber='GCMSQABANG-1604';
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
	 *  GCMSQABANG-1604:TC02 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - Added as child	 * 
	 */
    
    it(' Right Panel Document Structure Unit Menu Add a Unit from Structure using XML Added as child.'+jiraNumber, function () {

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
         rightpanelpage.clickOnButtonForGlobal(loadedData.ok_button);
         browser.sleep(2000);

         //Below code will Check wheather the created unit is presented in Document Structure
         rightpanelpage.expandUnit(loadedData.unit_Name);
         var createdUnit = rightpanelpage.checkUnitIsPresent(loadedData.created_unit);
         expect(createdUnit).toEqual(true);

         //Below code will delete the Created Unit
         rightpanelpage.rightClickOnOrignalAndDeleteLayer(loadedData.created_unit,loadedData.version);

        //Checking the pop up window is displayed.
         expect(rightpanelpage.isDeleteUnitPopUpDisplayed()).toEqual(true);
         rightpanelpage.clickOnButtonForGlobal('Cancel');
         
         rightpanelpage.rightClickOnOrignalAndDeleteLayer(loadedData.created_unit,loadedData.version);
         rightpanelpage.clickOnButtonForGlobal(loadedData.Yes_button);
         rightpanelpage.clickOnButtonForGlobal(loadedData.ok_button);
         rightpanelpage.expandUnit(loadedData.unit_Name);
         rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loadedData.created_unit);
         rightpanelpage.clickOnButtonForGlobal(loadedData.Yes_button);
         rightpanelpage.clickOnButtonForGlobal(loadedData.ok_button);
 
        
});
    
});
