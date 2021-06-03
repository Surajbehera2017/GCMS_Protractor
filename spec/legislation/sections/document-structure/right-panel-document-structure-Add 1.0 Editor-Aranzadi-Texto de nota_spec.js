var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
////var loaded =  testData.legislation.sections.document_structure.unit_xml_editor_textnote;
var jiraNum='GCMSQABANG-1696';
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

	
	  //GCMSQABANG-1696 TC11 -Add 1.0 Editor - Aranzadi - Texto de nota
	
	it('Unit Xeditor Element Selector Text Note.'+jiraNum, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.AddnewunitfromXMLeditor);
		browser.sleep(2000);
		
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);
		
		//Verify Element selector button displayed
		var buttonValidated = rightpanelpage.isElementSelectorDropdownDisplayedInUnitPopUp();
		expect(buttonValidated).toEqual(true);
		
		//Select Note from Element selector drop down
		var expOpton = I18n.documentstructure.elementselectoroption.textnote;
		rightpanelpage.dropDownOptionsOnXMLeditor(loaded.textnote);
		
		//Verify XML Insert Modal Window is displayed
		var xmlInsertWindow = rightpanelpage.isXMLEditorInsertModalWindowDisplayed();
		expect(xmlInsertWindow).toEqual(true);
		
		//Write data to input fields in Insert Modal pop up & click OK
		rightpanelpage.sendKeysToXMLEditorInsertModalWindow(loaded.textfield_value,0);
		rightpanelpage.sendKeysToXMLEditorInsertModalWindow(loaded.documentidfield_value,1);
		rightpanelpage.clickOnApplyOrCloseButton('ok');
		
		//Verify the new 'Text Note' & label text is displayed in the xml content
		var validateNoteInXML = 
			rightpanelpage.isTextNoteAndTagInXMLTextEquals(loaded.documentidfield_value,loaded.textfield_value);
		expect(validateNoteInXML).toEqual(true);
		
		//Click Cancel Button in pop-up
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		
	});


});
