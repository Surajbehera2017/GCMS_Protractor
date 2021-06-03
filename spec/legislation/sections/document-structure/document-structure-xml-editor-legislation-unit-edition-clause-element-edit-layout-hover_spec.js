var params = browser.params;
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-1658';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

	});

	afterEach(function () {//Close additional tab
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		//delete saved data
		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);
		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.sleep(2000);
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit, 'Original');
		browser.sleep(7000);
		rightpanelpage.selectAllAndDelete();


		//click on save
		browser.switchTo().defaultContent();
		//browser.ignoreSynchronization = false;
		browser.waitForAngular();
		rightpanelpage.clickOnApplyOrCloseButton('editTextLayer');
		browser.waitForAngular();
		browser.sleep(10000);
	});


	//GCMSQABANG-1658 : TC02 - Legislation Unit Edition - Clause Element - Edit - Layout and hove.
	/* Hover functionality is not covered */

	it('Legislation Unit Edition Clause Element Edit Layout and hover.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		browser.sleep(2000);
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit, 'Original');
		browser.sleep(7000)

		//click on parrafo
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		browser.switchTo().frame('ext-gen1132');
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
		rightpanelpage.clickonSpecificDataType(loadedData.datatype);

		//copy from external
		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true;
		browser.sleep(1000);
		rightpanelpage.clickOnPasteDropdown();
		browser.sleep(1000);
		rightpanelpage.selectOptionFromPasteDropdown('Paste external text');  // Select Paste External Text
		browser.sleep(1000);
		rightpanelpage.enterTextIntoPopup(loadedData.para1);
		rightpanelpage.clickOnInsertOrCancel('Insert');
		browser.sleep(1000);

		//selecting the text
		browser.switchTo().frame('ext-gen1132');
		browser.ignoreSynchronization = true;
		rightpanelpage.selectAText(loadedData.datatype);
		

		browser.switchTo().defaultContent();
		browser.switchTo().frame('legistext'); // give id of iframe
		browser.ignoreSynchronization = true;
		rightpanelpage.clickCapatextoAndChildTabs(loadedData.datatype);
		rightpanelpage.moveToInsertAndSelectElement('clause');
		rightpanelpage.fillMandatoryFieldsofNota('clause', 'id*', 'Id1');

		//click on save
		browser.switchTo().defaultContent();
		//browser.ignoreSynchronization = false;
		browser.waitForAngular();
		rightpanelpage.clickOnApplyOrCloseButton('editTextLayer');
		browser.waitForAngular();
		browser.sleep(10000);


	});

});
