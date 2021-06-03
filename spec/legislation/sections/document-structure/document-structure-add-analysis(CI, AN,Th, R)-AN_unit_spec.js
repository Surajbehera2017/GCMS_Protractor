var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var authornotespage = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var jiraNum='GCMSQABANG-1768';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');

describe('Document-structure', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id_xml);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

    });
    afterEach(function () {//Close additional tab
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id_xml);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(2000);

        //deleting author notes for the unit
        rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.authornote_icon);
        browser.waitForAngular();
        browser.sleep(1000);
        globalpo.selectNoOfRows('1');
        browser.sleep(1000);
        //globalpo.clickActioninTable('delete');
        globalpo.clickOnbuttonInsideSectionTable('Delete');
        globalpo.clickOnNavigationOrCloseButton('ok');
        globalpo.clickOnNavigationOrCloseButton('close');
    });
 
	//GCMSQABANG-1768: 2-Add Analysis (CI, AN,Th, R) from the unit -- Author Notes
    
    it('Add Analysis CI AN Th R from the unit Author Notes.'+jiraNum, function () {

        browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(2000);
        var firstUnit = rightpanelpage.isVersionExistForUnit(loaded.unit,'Original');
        expect(firstUnit).toEqual(true);
        rightpanelpage.rightClickOnUnitAndSelectAddAnalysisAuthorNote(loaded.first_unit_pe);
        //rightpanelpage.ClickOnStrucureActionAddAnalysisSelectSubAction();
        browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle = handles[1];
        browser.switchTo().window(newTabHandle);
        console.log('Before clicking add visual  no. of handles: '+ handles.length);
        browser.waitForAngular();
       // authornotespage.clickonAddVisual(); clickonXMLorVisual
        globalpo.clickonXMLorVisual('Visual');
         browser.sleep(2000);
        browser.switchTo().frame('authornote');//id of this frame
        browser.ignoreSynchronization = true; 
        browser.sleep(2000);
        globalpo.clickOnPasteDropdown();//select paste from dropdown
        globalpo.selectOptionFromPasteDropdown('Paste external text');//select paste from external text from dropdown
        rightpanelpage.enterTextIntoPopup(loaded.externaltext);
        rightpanelpage.clickOnInsertOrCancel('Insert');
        rightpanelpage.changeTheWordFormat('floppy-disk');
        //authornotespage.clickOnActionsInGeneralTab('Save');
        //globalpo.clickOnNavigationOrCloseButton('AuthorNotesEditText.close');
        browser.switchTo().defaultContent();//save button
        
        browser.ignoreSynchronization=false;

        
        //browser.switchTo().window(handles[1]);
        browser.waitForAngular();
        browser.sleep(2000);
        authornotespage.clickOnButtonForGlobal('Add');
        browser.waitForAngular();
        browser.switchTo().window(handles[0]);
        browser.waitForAngular();
        browser.sleep(4000);
        
   });
    
  });


  
});
