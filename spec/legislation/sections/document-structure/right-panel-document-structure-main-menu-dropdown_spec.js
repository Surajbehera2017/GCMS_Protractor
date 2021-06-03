var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1678';
var testData = require('../../../../test-data/Jira_TestData/'+jiraNumber+'.js');
var loadedData=testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	/*GCMSQABANG-1678
	 * 06 - Structure Actions //////
	 */

	
	it('Structure Actions Dropdown menu.' + jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		rightpanelpage.clickStructureActions();
		
		//Verify menu options displayed
		browser.waitForAngular();
		expect(rightpanelpage.isStructureActionsMenuDisplayed()).toEqual(true);
		
		//Read each option separated by comma
		var expOptons = I18n.documentstructure.structureactionsmenuoptions.split(',');
		//Verify all expected options are displayed in the menu
		for (var row = 0; row < expOptons.length; row++) {
			var optionFound = rightpanelpage.isOptionDisplayedInStructureActionsMenu(expOptons[row]);
			expect(optionFound).toEqual(true);
		}
		
	});
	
	
});
