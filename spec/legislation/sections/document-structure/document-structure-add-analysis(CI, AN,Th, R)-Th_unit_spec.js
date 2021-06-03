var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var authornotespage = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var jiraNum='GCMSQABANG-1768';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id_xml);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

  });
  afterEach(function () {
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();

        legisDocDisplayPage.get(loaded.marginal_id_xml);
        browser.waitForAngular();
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(2000);
        //deleting Thesaurus for a unit
        rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.thesaurus_icon);
        browser.sleep(3000);
        globalpo.selectNoOfRows('1');
        browser.sleep(1000);
        globalpo.clickActioninTable('delete');
        //globalpo.clickOnbuttonInsideSectionTable('Delete');
        globalpo.clickOnNavigationOrCloseButton('ok');
        globalpo.clickOnNavigationOrCloseButton('close');
});
 
	 //GCMSQABANG-1768: 2-Add Analysis (CI, AN,Th, R) from the unit -- Thesaurus
	  var jiraNumber='GCMSQABANG-1768';
    it('Add Analysis CI AN Th R from the unit thesaurus.'+jiraNum, function () {

		browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        rightpanelpage.rightClickOnUnitAndSelectAddAnalysisThesaurus(loaded.first_unit_pe);
      
        browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle = handles[1];
        browser.switchTo().window(newTabHandle).then(function () {
          
          browser.waitForAngular();
          var contextindex = rightpanelpage.isThesaurusHierarchyPresent();
          expect(contextindex).toEqual(true);
           var getThesaurus = rightpanelpage.getTextofThesaurusHierarchy();
          expect(getThesaurus).toContain(loaded.thesaurus_hierarchy);
          browser.sleep(1000);
          thesauruspage.selectThesarusTypeFromDropdown(loaded.thesaurustype);
          thesauruspage.selectThesaurusHierarchy(loaded.thesaurushierarchy);
          thesauruspage.getIndexAndClickOnThesaurusTerm(loaded.thesaurusterm);
          browser.sleep(1000);
          authornotespage.clickOnButtonForGlobal('Add');
          browser.sleep(1000);
          globalpo.clickOnButtonForGlobal('Ok');
          browser.sleep(1000);
          browser.close();
          browser.sleep(3000);
       });
       browser.switchTo().window(handles[0]);
       browser.sleep(1000);
               
            });
  });
  
});
