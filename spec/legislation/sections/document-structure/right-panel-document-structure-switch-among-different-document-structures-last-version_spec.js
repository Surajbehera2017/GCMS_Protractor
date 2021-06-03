var params = browser.params;
var jiraNumber = 'GCMSQABANG-1684';
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
	afterEach(function () {//Close additional tab
		browser.getAllWindowHandles().then(function (handles) {
		browser.switchTo().window(handles[0]);
			for (var i = 1; i < handles.length; i++) {
				browser.switchTo().window(handles[i]).then(function () {
					browser.close();
				}, function (error) {
				   browser.switchTo().window(handles[0]);
				});
			}
			browser.switchTo().window(handles[0]);
		});
	});

//GCMSQABANG-1684 :TC01 - Right Panel - Document Structure - Switch among different document structures - Last version.
jiraNumber='GCMSQABANG-1684'
it('Switch among different document structures Last version inForce.'+jiraNumber, function () {


		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		
		//Expand Unit
		rightpanelpage.expandUnitInStructure(loadedData.expandable_unit);
		//Expand Sub - Unit
		rightpanelpage.expandUnitInStructure(loadedData.expandable_sub_unit);
		//Expand Sub - Unit - Level 2
		rightpanelpage.expandUnitInStructure(loadedData.expandable_sub_unit_level_two);
		
		browser.waitForAngular();
		//Verify the expected version exist for the unit
		//var versionExist = rightpanelpage.isVersionExistForUnit(loadedData.expandable_sub_unit_level_two,loadedData.expected_version_in_sublevel_two);
		//above method is not returning boolean value. Hence trying to click version, & then verify pop-up is displayed
		rightpanelpage.ClickOnOriginalUnit(loadedData.expandable_sub_unit_level_two,loadedData.expected_version_in_sublevel_two);
		browser.waitForAngular();
		
	
	});

	
});







