var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var jiraNum='GCMSQABANG-1768';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id_xml);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

	});
	afterEach(function () {//Close additional tab
		browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();

        legisDocDisplayPage.get(loaded.marginal_id_xml);
        browser.waitForAngular();
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(2000);
		rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.relationship_icon)
		browser.sleep(6000);
		rightpanelpage.clickRelationSource();//selecting source from dropdown
		browser.sleep(3000);
		globalpo.selectNoOfRows('1');
		globalpo.clickOnbuttonInsideSectionTable('Delete');
        globalpo.clickOnNavigationOrCloseButton('ok');
        globalpo.clickOnNavigationOrCloseButton('close');
	});


	//GCMSQABANG-1768:  2-Add Analysis (CI, AN,Th, R) from the unit -- Relationship
	var jiraNumber='GCMSQABANG-1768';

	it('Add Analysis CI AN Th R from the unit Relationship.'+jiraNum, function () {

		browser.waitForAngular();
		var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
		expect(structure).toEqual(true);
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
		rightpanelpage.rightClickOnUnitAndSelectAddAnalysisRelationship(loaded.first_unit_pe);
		browser.sleep(3000);
		relationshippage.addRelationType(7);//click on typr of relationship dropdown box
		browser.sleep(1000);
		//type relationship type "modifica" in the search
		relationshippage.enterRelationType(loaded.rel_type,9);
		browser.sleep(1000);
		//entering target marginal/
		relationshippage.addTextsInCombo(10,loaded.code_name);
		browser.sleep(1000);
		relationshippage.addYearNo(loaded.year);
		browser.sleep(1000);
		relationshippage.addN_No(loaded.n_no);
		relationshippage.addTextsInCombo(11,loaded.unit1);
		relationshippage.clickAddonpopup();//click on add button
		browser.sleep(4000);
		relationshippage.clickClosepopup(2);//closing the add relationship pop up
		//delete the relationship for a unit
		browser.sleep(4000);
		
							
		
	});
});
