var params = browser.params;
var defectId='GCMSNXT-12227';
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber ='GCMSQABANG-1822';
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedata = testData.legislation.sections.document_structure;

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedata.unit_with_version.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	/*
	 *  25- Eliminar numparaghaph element with HR as a child
	 */
	xit('Eliminar numparagraph element with HR as a child.'+jiraNumber+'DefectId:'+'.'+defectId, function () {

	     browser.waitForAngular();
       rightpanelpage.clickDocumentStructure();
       browser.waitForAngular();
      rightpanelpage.rightClickOnVersionAndSelectEditLayerVisual(loadedata.add_analysis. first_unit_pe,'Original');
        //browser.waitForAngular();
        browser.switchTo().frame('legistext'); // give id of iframe1
        browser.switchTo().frame('ext-gen1132');// give id of frame 2
        browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
        browser.waitForAngular();
        rightpanelpage.selectTextofFirstLineXeditor();
        rightpanelpage.rightClickOniFrameSelectTextFieldAndSelectNumberGraph();
        browser.waitForAngular();
        var number = rightpanelpage.isNumberGraphImagePresent();
        expect(number).toEqual(true);
        browser.waitForAngular();
        
        rightpanelpage.rightClickOniFrameTextFieldAndSelectHROption();
        browser.waitForAngular();
        var hr = rightpanelpage.isHRLinePresent();
        expect(hr).toEqual(true);
 
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.waitForAngular();
        rightpanelpage.rightClickOnVersionAndSelectEditLayerVisual(loadedata.add_analysis. first_unit_pe,'Original');
        browser.waitForAngular();
        browser.switchTo().frame('legistext'); 
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true; 
        browser.waitForAngular();
        rightpanelpage.rightClickOniFrameTextFieldAndSelectEliminarButtonNumparagraph();
        browser.waitForAngular();
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.waitForAngular();

        
  });
	
});







