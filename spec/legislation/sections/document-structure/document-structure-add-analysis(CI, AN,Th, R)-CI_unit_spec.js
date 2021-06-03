
//i18n basic support
var params = browser.params;
//var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var contextIndexSection = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-1768';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];



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
        browser.sleep(1000);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
         //deleting contextindex for a unit
        rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,'ci');
        browser.waitForAngular();
        browser.sleep(1000);
        globalpo.clickActioninTable('delete');
        //globalpo.clickOnbuttonInsideSectionTable('Delete');
        globalpo.clickOnNavigationOrCloseButton('ok');
        globalpo.clickOnNavigationOrCloseButton('close');
    });
 
    //GCMSQABANG-1768: 2-Add Analysis (CI, AN,Th, R) from the unit -- Context Index
       
  it('Add Analysis CI AN Th R from the unit context index.'+jiraNum, function () {

		browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        rightpanelpage.rightClickOnUnitAndSelectAddAnalysisContextIndex(loaded.first_unit_pe);
        
        browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle = handles[1];
        browser.switchTo().window(newTabHandle).then(function() {
          
          browser.waitForAngular();
          globalpo.selectSearchNameAndValue(loaded.fieldname_1,loaded.fielnameval_1);
          globalpo.selectContextIndexHierarchy(loaded.ContextIndexHierarchy);
          
          globalpo.selectValueFromContextIndexTerm(loaded.ContextIndexTerm);
          globalpo.clickOnButtonForGlobal('Save');
          browser.waitForAngular();
          browser.sleep(3000);          
       });
       browser.switchTo().window(handles[0]);
       browser.sleep(1000);
  });
});
    
});