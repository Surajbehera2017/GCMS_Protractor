var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber='GCMSQABANG-1612';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]
//var loaded = testData.legislation.sections.document_structure;
var path = require('path');
var uploadFolder = '../../../../test-data/' + params.env + '/upload-files/';
var docFileToUpload = params.BU + '.LAN-2015.102-spa-child.xml';


describe('Document-structure', function () {

    beforeAll(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();

        legisDocDisplayPage.get(loadedData.marginal_id);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);

    });

    //ALREADY DONE
	/*
	 * GCMSQABANG-1612:  TC03 - Right Panel - Document Structure - Unit Menu - Add a Unit from Structure using XML - Added as upper sibling
	 * 
	 */

    it('Right Panel Document Structure Unit Menu Add a Unit from Structure using XML Added as upper sibling.'+jiraNumber, function () {

        browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);
        rightpanelpage.clickDocumentStructure();
        /*var unit = rightpanelpage.checkUnitIsPresent(7);
        expect(unit).toEqual(true);*/
        rightpanelpage.rightClickOnUnitAndSelectImportXML(loadedData.unit_Name);
        rightpanelpage.browseXMLFile(path.resolve(__dirname, uploadFolder + docFileToUpload));
        expect(rightpanelpage.isFileAddedForUploadingXMLFile(docFileToUpload)).toEqual(true);
        var radio = rightpanelpage.isRadioButtonPresentBrowseXML();
        expect(radio).toEqual(true);
        rightpanelpage.clickRadioButtonInAddUnitPopUp('as an upper sibling');
        rightpanelpage.clickOnButtonForGlobal('Import');
        browser.waitForAngular();
        var error = rightpanelpage.isImportUnitXMLPopUPErrorDisplayed();
        expect(error).toEqual(true);
        rightpanelpage.clickOKButtonDisplayedinErrorValidation('ok');
        rightpanelpage.clickCancelButtonBrowseXML();
    });
});
