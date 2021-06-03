var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loadedData =  testData.legislation.sections.document_structure.unit_xml_editor_clause;
var jiraNum='GCMSQABANG-1703';
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


	 // GCMSQABANG-1703  TC19 -Add 1.0 Editor - Aranzadi - Clause
	
	it('Unit Xeditor Element Selector Clause.'+jiraNum, function () {

		
		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.AddnewunitfromXMLeditor);
		browser.sleep(2000);
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);
		browser.sleep(2000);
		//Verify Element selector dropdown displayed
		var buttonValidated = rightpanelpage.isElementSelectorDropdownDisplayedInUnitPopUp();
		expect(buttonValidated).toEqual(true);
		browser.sleep(2000);
		//Select Clause from Element selector drop down
		//var expOpton = I18n.documentstructure.elementselectoroption.clause;
		rightpanelpage.dropDownOptionsOnXMLeditor('Clause');
		browser.sleep(2000);
		//Verify XML Insert Modal Window is displayed
		var xmlInsertWindow = rightpanelpage.isXMLEditorInsertModalWindowDisplayed();
		expect(xmlInsertWindow).toEqual(true);
		browser.sleep(2000);
		//Write data to input fields in Insert Modal pop up & click OK
		rightpanelpage.sendKeysToXMLEditorInsertModalWindow('Text',0);
		rightpanelpage.sendKeysToXMLEditorInsertModalWindow('id',1);
		browser.sleep(2000);
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		browser.sleep(2000);
		//Verify the new tag '<clause>' is displayed with given values
		var validateTagInXML = rightpanelpage.isClauseIDTextAndTagInXMLTextEquals('id','Text');
		expect(validateTagInXML).toEqual(true);
		
		//Click Cancel Button in pop-up
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		
	});


});
