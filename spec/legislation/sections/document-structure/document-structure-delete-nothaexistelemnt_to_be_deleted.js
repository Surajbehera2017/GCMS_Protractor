var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loaded = testData.legislation.sections.document_structure.delte_nothaexistlelement;

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 

	/*
	 * not able to match
     * DOUBT
	 * 
	 */
	it('Delete Notatexisto', function () {

		browser.waitForAngular();
        //Verify Document text tab is visible
		rightpanelpage.clickDocumentStructure();
        browser.waitForAngular();
        rightpanelpage.rightClickOnA2Orignal();
        browser.waitForAngular();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
        rightpanelpage.clickCapatexto();
        browser.sleep(1000);
        rightpanelpage.movemousetoInsertElements();
        browser.sleep(1000);
        rightpanelpage.clicknotaexisto();
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false; 
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        
        browser.waitForAngular();
        //Verify Document text tab is visible
		
        rightpanelpage.rightClickOnA2Orignal();
        browser.waitForAngular();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true; 
         browser.sleep(1000);
        rightpanelpage.clickCapatexto();
        browser.sleep(1000);
        rightpanelpage.movemousetoInsertElements();
        browser.sleep(1000);
        rightpanelpage.clicknotaexisto();
        browser.sleep(1000);
        rightpanelpage.clickonNotaTextoAgain();
         browser.sleep(1000);
        rightpanelpage.clickDeleteNotaExisto();
         browser.sleep(1000);
        rightpanelpage.clickonNotaTextoAgain();
         browser.sleep(1000);
        rightpanelpage.clickDeleteNotaExisto();
       
        }); 


        //doubt
    it('Delete', function () {

	   browser.waitForAngular();
       rightpanelpage.clickDocumentStructure();
       browser.waitForAngular();
       rightpanelpage.rightClickOnVersionAndSelectEditLayerVisual(loadedata.add_analysis. first_unit_pe,'Original');
        rightpanelpage.clickonXEditorExpandButton();
        //browser.waitForAngular();
        browser.switchTo().frame('legistext'); // give id of iframe1
        browser.switchTo().frame('ext-gen1132');// give id of frame 2
        browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
        browser.waitForAngular();
        rightpanelpage.selectTextofFirstLineXeditor();
         rightpanelpage.rightClickOniFrameSelectTextFieldAndSelectParaffoOption();
        browser.waitForAngular();
        var para = rightpanelpage.isParagraphSpacePresent();
        expect(para).toEqual(true);
        rightpanelpage.rightClickonParagraphSelectNotatextHist();
        browser.waitForAngular();
        var notetext = rightpanelpage.isNotaTextHistBackgroundPresent();
        expect(notetext).toEqual(true);
        rightpanelpage.rightClickonNotaTextandDeleteButton();
        browser.waitForAngular();
        
    });
});