var params = browser.params;
var jiraNumber = 'GCMSQABANG-1741';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);

    });


	/*
	 * xEditor - Copy external text - Tables - Word format - Unit creation - Verify elements
      can not paste formatted text as testdata file (.js)  does store formatted data(Bold, Italic etc.)
    
     
     */

    it('xEditor Copy external text Tables Word format Unit creation Verify elements.'+jiraNumber, function () {
        browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        //rightpanelpage.clickStructureActions();
        // var structure = rightpanelpage.isStructureActionsMenuDisplayed();
        // expect(structure).toEqual(true);

        browser.waitForAngular();
        rightpanelpage.ClickOnStrucureActionAndSelectAction('Add new unit from editor');
        browser.sleep(7000);

        browser.switchTo().frame('legistext');
        // browser.switchTo().frame('ext-gen1132');// give id of frame 2
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        var paste = rightpanelpage.isPasteDropdownPresentXEditor();
        expect(paste).toEqual(true);
        rightpanelpage.clickOnPasteDropdown();
        browser.waitForAngular();
        rightpanelpage.selectOptionFromPasteDropdown('Paste from Word');
        browser.sleep(2000);
        var word = rightpanelpage.isPasteWordDialogBoxDisplayed();
        expect(word).toEqual(true);

        // switch to iframe related to paste from word popup. and enter text.
         browser.switchTo().frame(1);
        browser.sleep(3000);
        rightpanelpage.switchingFrameintoPasteOffice('Test');
         browser.sleep(3000);




    });

});







