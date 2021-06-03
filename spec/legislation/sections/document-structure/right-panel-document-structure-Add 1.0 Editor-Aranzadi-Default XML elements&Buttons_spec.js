var params = browser.params;
var jiraNumber1='GCMSQABANG-1691';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber1 + '.js');
var loaded=testData[params.env][params.BU];
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


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


	/*
	 * GCMSQABANG-1691 TC06 -Add 1.0 Editor - Aranzadi - Default XML elements
	 * GCMSQABANG-1692 TC07 -Add 1.0 Editor - Aranzadi - Buttons
	 */
     
     var jiraNumber2='GCMSQABANG-1692';
	it('Add Unit Xeditor Default XML elements and Buttons.'+jiraNumber1+'.'+jiraNumber2, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
		browser.waitForAngular();
	 
		//Verify pop-up displayed
		 var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		 expect(popup).toEqual(true);
 	 
		
		//Verify all expected buttons displayed

		 var buttonsValidated = rightpanelpage.isdisplayedofSideBarButton(loaded.validate)
		 		&& rightpanelpage.isdisplayedofSideBarButton(loaded.indent_XML)
				&& rightpanelpage.isdisplayedofSideBarButton(loaded.change_history)
				&& rightpanelpage.isdisplayedofSideBarButton(loaded.grouptext)
				&& rightpanelpage.isdisplayedofSideBarButton(loaded.cite)
				&& rightpanelpage.isdisplayedofSideBarButton(loaded.citation)
				&& rightpanelpage.isFontSizeSelectorDisplayedInUnitPopUp()
				&& rightpanelpage.isElementSelectorDropdownDisplayedInUnitPopUp()
				&& rightpanelpage.isSaveButtonDisplayedInModalUnitEditPopUp();
            expect(buttonsValidated).toEqual(true);

		 //Click Cancel Button & Verify pop-up is closed
		 rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
		 var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		 expect(popup).toEqual(false);

		
	});


});
