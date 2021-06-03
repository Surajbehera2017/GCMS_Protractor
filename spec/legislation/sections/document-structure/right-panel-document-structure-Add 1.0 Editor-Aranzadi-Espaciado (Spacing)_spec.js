var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loadedData =  testData.legislation.sections.document_structure.unit_xml_editor;
var jiraNum='GCMSQABANG-3687';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
loaded=testData[params.env][params.BU];

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
	
	 // GCMSQABANG-3687 TC21 -Add 1.0 Editor - Aranzadi - Espaciado (Spacing)
	 
	it('Unit Xeditor Element Selector Espaciado Spacing.'+jiraNum, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.AddnewunitfromXMLeditor);
		browser.sleep(2000);
		
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);
		
		//Verify Element selector dropdown displayed
		var buttonValidated = rightpanelpage.isElementSelectorDropdownDisplayedInUnitPopUp();
		expect(buttonValidated).toEqual(true);
		
		//Select Espaciado (Spacing) from Element selector drop down
		//var expOpton = I18n.documentstructure.elementselectoroption.spacing;
		rightpanelpage.dropDownOptionsOnXMLeditor('Spacing');
		
		//Verify the new tag '<parrafo>' is displayed
		var validateTagInXML = rightpanelpage.isParaffoTagDisplayedInXMLText(loaded.espaciadoanteriortag);
		//var validateTagInXML = rightpanelpage.isXmlTagsArePresent('espaciado-anterior');
		expect(validateTagInXML).toEqual(true);
		
		//Click Cancel Button in pop-up
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		
	});


});
