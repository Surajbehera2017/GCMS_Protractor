var params = browser.params;
//var jiraURL = params.jiraURL;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNumber = 'GCMSQABANG-1648';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {
		//Load the document
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

	});

	afterAll(function () {

		/*	//Delete the Unit created for this test
			browser.ignoreSynchronization = false;
			var legisDocDisplayPage = new LegislationDocumentDisplayPage();
			//delete version
			legisDocDisplayPage.get(loaded.marginal_id);
			rightpanelpage.urlLoad(params.valid_username,params.valid_password);
			browser.waitForAngular();
			rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
			browser.sleep(4000);
			rightpanelpage.expandUnitInStructure(loaded.unit);
			rightpanelpage.rightClickOnVersionAndSelectDeleteLayer(loaded.sibling_unit_breakline,'Original');
			rightpanelpage.clickOnButtonForGlobal('Yes');
			//rightpanelpage.clickYesButtonInDeleteUnitPopUp();
			rightpanelpage.clickOnButtonForGlobal('Ok');
			browser.sleep(2000);
			//Delete unit
			legisDocDisplayPage.get(loaded.marginal_id);
			rightpanelpage.urlLoad(params.valid_username,params.valid_password);
			browser.waitForAngular();
			//rightpanelpage.clickDocumentStructure();
			rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
			browser.sleep(4000);
			rightpanelpage.expandUnitInStructure(loaded.unit);
			rightpanelpage.rightClickOnUnitAndSelectDeleteDropdown(loaded.sibling_unit_breakline)
			//rightpanelpage.rightClickOnUnitAndSelectDelete(loadedData.sibling_unit_breakline);
			rightpanelpage.clickOnButtonForGlobal('Yes');
			rightpanelpage.clickOnButtonForGlobal('Ok');*/

	});

	// GCMSQABANG-1648 : TC01 - Legislation Unit Edition - Break Line Element - Add

	//var jiraNumber = 'GCMSQABANG-1648';
	it('Legislation Unit Edition Break Line Element Add.' + jiraNumber, function () {

		browser.driver.manage().window().maximize();
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
		browser.sleep(2000);
		rightpanelpage.rightClickOnUnitAndSelectAdd(loaded.unit);
		browser.sleep(4000);
		var addPopUp = rightpanelpage.isAddUnitPopUpDisplayed();
		expect(addPopUp).toEqual(true);
		//First select the sibling radio. After that child radio is getting enabled. (Application issue)
		rightpanelpage.clickRadioButtonInAddUnitPopUp('lower');
		rightpanelpage.clickRadioButtonInAddUnitPopUp('child');
		//rightpanelpage.clickAsALowerSiblingRadioButtonInAddUnitPopUp();
		//rightpanelpage.clickAsAChildRadioButtonInAddUnitPopUp();
		rightpanelpage.writeUnitIDInAddUnitPopUp(loaded.sibling_unit_breakline);
		browser.sleep(9000);
		//Steps - belongs to iFrame
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
		browser.switchTo().frame('ext-gen1132'); // give id of iframe
		browser.ignoreSynchronization = true;
		browser.sleep(7000);
		rightpanelpage.writeRubricInAddUnitPopUp(loaded.rubric_text);
		browser.sleep(2000);
		rightpanelpage.writeEditorialRubricInAddUnitPopUp(loaded.editorial_rubric_text);
		browser.sleep(2000);
		rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter(loaded.paragraph_one);
		browser.sleep(2000);
		rightpanelpage.rightClickOnSecondParagraphinFrameTextFieldAndSelectHROption();
		browser.sleep(2000);
		rightpanelpage.clickonSpecificDataType(loaded.datatype);
		browser.sleep(1000);

		//going to the first frame
		browser.switchTo().defaultContent();
		browser.ignoreSynchronization = false;
		browser.sleep(3000);
		browser.switchTo().frame('legistext');
		browser.ignoreSynchronization = true;
		//rightpanelpage.writeFieldInInnerTitleEditPopUp('Title',19);
		rightpanelpage.fillFieldTextinPopUpWindow(loaded.uni_field, loaded.uni_val);
		rightpanelpage.clickOnInsertOrCancel('Accept');
		browser.sleep(3000);
		rightpanelpage.selectOptionFromDropDown(loaded.final_label, loaded.final_textbox, loaded.final_value);
		browser.switchTo().defaultContent();
		browser.ignoreSynchronization = false;
		//Click Save button
		browser.sleep(2000);
		rightpanelpage.clickOnButtonForGlobal('Save');
		browser.sleep(5000);//Sleep required- Because Synchornization is overriden.
		browser.driver.ignoreSynchronization = false;
		browser.sleep(2000);
		var infoMsg = rightpanelpage.getMessageFromInfoBoxPopUp();

		infoMsg.then(function (text) {
			if (text === '') { //Save successful. No info message. Popup closes automatically
				expect(rightpanelpage.isAddUnitPopUpDisplayed()).toEqual(false);
				browser.sleep(5000);
				browser.waitForAngular();
				//Check new data is displayed in edit view - xml
				rightpanelpage.rightClickOnOrignalAndXmlLayer(loaded.sibling_unit_breakline, 'Original')
				//rightpanelpage.rightClickOnVersionAndSelectEditLayerXML(loaded.sibling_unit_breakline,'Original');
				//Verify all added texts in xml window. Note this works in chrome alone. not in ie
				browser.sleep(2000);
				var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
				browser.sleep(2000);
				expect(newXMLText).toContain(loaded.rubric_text);
				browser.sleep(2000);
				expect(newXMLText).toContain(loaded.editorial_rubric_text);
				browser.sleep(2000);
				expect(newXMLText).toContain(loaded.paragraph_one);
				browser.sleep(2000);
				expect(newXMLText).toContain('<hr/>');//Verify new line text
				browser.sleep(2000);
				expect(newXMLText).toContain(loaded.title_text);
			}
			else {//info message displayed. Duplicate entry for unit, hence cannot save. expected.
				browser.sleep(2000);
				expect(text).toContain(I18n.documentstructure.duplicateentryinsertmessage);
				browser.sleep(2000);
				rightpanelpage.clickOnButtonForGlobal('Yes');
				browser.sleep(2000);//Sleep required- Because Synchornization is overriden.
				//rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
				rightpanelpage.clickOnButtonForGlobal('Cancel');
				browser.sleep(2000);
			}

		});


	});

	// GCMSQABANG-1649:TC02 - Legislation Unit Edition - Break Line Element - Edit	
	var jiraNumber1 = 'GCMSQABANG-1649';
	it('Legislation Unit Edition Break Line Element Edit.' + jiraNumber1, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(4000);
		//Now edit the added Unit
		rightpanelpage.expandUnitInStructure(loaded.unit);
		browser.sleep(2000);
		browser.waitForAngular();
		//Check new data is displayed in edit view - xml
		//rightpanelpage.rightClickOnVersionAndSelectEditLayerXML(loaded.sibling_unit_breakline,'Original');
		rightpanelpage.rightClickOnOrignalAndXmlLayer(loaded.sibling_unit_breakline, 'Original')
		//Verify all added texts in xml window. Note this works in chrome alone. not in ie
		browser.sleep(2000);
		var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
		browser.sleep(2000);
		expect(newXMLText).toContain('<hr/>');//Verify new line text


	});

});







