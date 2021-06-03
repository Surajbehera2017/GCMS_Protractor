var params = browser.params;
var jiraNumber = 'GCMSQABANG-1686';
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

		
//GCMSQABANG-1686 :TC03 - Right Panel - Document Structure - Switch among different document structures - Medium version
it('Switch among different document structures Medium version.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(2000);
		
		//Verify given structure displayed on page
		//Select given structure 

		//Expand Unit		
		rightpanelpage.expandUnit(loadedData.expandUnit);
		//(loadedData.marginal_id);
		browser.waitForAngular();

		//Expand Sub - Unit	
		rightpanelpage.expandUnit(loadedData.expandSecondUnit);	
		
		browser.sleep(2000);
		//Verify the expected version exist for the unit
		//expect(rightpanelpage.isVersionExistForUnit('[RB.1/TIT.I] (1)','08/01/1993')).toEqual(true);
		expect(rightpanelpage.isVersionExistForUnit(loadedData.expandSecondUnit,loadedData.expected_version_in_sublevel_two)).toEqual(true);
		
	});

	
});







