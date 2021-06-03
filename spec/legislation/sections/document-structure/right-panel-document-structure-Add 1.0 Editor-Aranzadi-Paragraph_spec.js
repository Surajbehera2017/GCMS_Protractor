var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var jiraNum='GCMSQABANG-1720';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNum + '.js');
var loadedData = testData[params.env][params.BU];
describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id_xml);
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
	 *  GCMSQABANG-1720 TC18 -Add 1.0 Editor - Aranzadi - Paragraph
	 */
	it('Unit Xeditor Element Selector Section Paragraph.'+jiraNum, function () {

		
		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loadedData.document_structure); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loadedData.expected_option);
		browser.sleep(2000);
		
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);
		
		//Verify Element selector dropdown displayed
		var buttonValidated = rightpanelpage.isElementSelectorDropdownDisplayedInUnitPopUp();
		expect(buttonValidated).toEqual(true);
		
		//Select Section(Paragraph) from Element selector drop down
	
		rightpanelpage.dropDownOptionsOnXMLeditor(loadedData.section_element);
		
		//Verify XML Insert Modal Window is displayed
		var xmlInsertWindow = rightpanelpage.isXMLEditorInsertModalWindowDisplayed();
		expect(xmlInsertWindow).toEqual(true);
		
		//Write data to input fields in Insert Modal pop up & click OK
		rightpanelpage.sendKeysToXMLEditorInsertModalWindow(loadedData.textfield_value,0);
		rightpanelpage.sendKeysToXMLEditorInsertModalWindow(loadedData.idfield_value,1);
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		
		//Verify the new tag '<paragraph>' is displayed with given values
		var validateTagInXML = rightpanelpage.isParagraphIDTextAndTagInXMLTextEquals(loadedData.idfield_value,loadedData.textfield_value);
		expect(validateTagInXML).toEqual(true);
		
		//Click Cancel Button in pop-up
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		
	});


});
