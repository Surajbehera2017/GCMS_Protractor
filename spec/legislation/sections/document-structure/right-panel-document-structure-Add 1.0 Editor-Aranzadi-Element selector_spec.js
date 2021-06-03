var jiraNum='GCMSQABANG-1693';
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/Jira_TestData/' + jiraNum + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
//var loaded= testData.legislation.sections.document_structure;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
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

	
	 //GCMSQABANG-1693 TC08 -Add 1.0 Editor - Aranzadi - Element selector
	 	
	it('Add Unit Xeditor Element selector options.'+jiraNum, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.AddnewunitfromXMLeditor);
		//rightpanelpage.clickAddNewUnitFromXMLEditorInStructureActionsMenu();
		
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);
		browser.sleep(2000);
		//Verify Element selector button displayed
		var buttonValidated = rightpanelpage.isElementSelectorDropdownDisplayedInUnitPopUp();
		expect(buttonValidated).toEqual(true);
		browser.sleep(2000);
		//Read each option separated by comma
		var expOptons = I18n.documentstructure.elementselectoroptionsinuniteditor.split(',');
		browser.sleep(2000);
		//Verify all expected options are displayed in the dropdown
		for (var row = 0; row < expOptons.length; row++) {
			var optionFound = rightpanelpage.isOptionPresentInElementSelectorDropDownInUnitPopUp(expOptons[row]);
			expect(optionFound).toEqual(true);
		}
		browser.sleep(2000);
		//Click Cancel Button in pop-up
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		
	});


});
