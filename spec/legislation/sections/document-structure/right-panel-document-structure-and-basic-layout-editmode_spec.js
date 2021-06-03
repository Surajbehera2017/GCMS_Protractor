var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var jiraNumber = 'GCMSQABANG-1681';
var LegislationDocumentEditPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocEditPage = new LegislationDocumentEditPage();

		legisDocEditPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	/*GCMSQABANG-1681
	 * 02 - Basic Layout - Edition mode
	 */

	
	it('Document Structure Basic Layout Edit mode.'+ jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.buttonDisplayedInEditMode(loaded.edit_button);
		//Verify Document structure tab is visible
		var docTextDisplayed = rightpanelpage.isRightPanelTabDisplayed(loaded.documnet_structure);
		expect(docTextDisplayed).toEqual(true);
		
		//Verify Document text tab is visible
		var docStructureDisplayed = rightpanelpage.isRightPanelTabDisplayed(loaded.document_text);
		expect(docStructureDisplayed).toEqual(true);
		
		//Verify Original text tab is visible
		var originalTextDisplayed = rightpanelpage.isRightPanelTabDisplayed(loaded.original_text);
		expect(originalTextDisplayed).toEqual(true);
		
		browser.waitForAngular();
		// Click on document structure tab and check whether Document structure tab is highlighted
		rightpanelpage.clickOnRightPanelTab(loaded.documnet_structure);
		var expectedTabHighlighted = rightpanelpage.isHighlightedTabInRightPanelEquals(loaded.documnet_structure);
		expect(expectedTabHighlighted).toEqual(true);

		// Click on document text tab and check whether Document structure tab is highlighted
		rightpanelpage.clickOnRightPanelTab(loaded.document_text);
		var expectedTabHighlighted = rightpanelpage.isHighlightedTabInRightPanelEquals(loaded.document_text);
		expect(expectedTabHighlighted).toEqual(true);

		// Click on Original text tab and check whether Document structure tab is highlighted
		rightpanelpage.clickOnRightPanelTab(loaded.original_text);
		var expectedTabHighlighted = rightpanelpage.isHighlightedTabInRightPanelEquals(loaded.original_text);
		expect(expectedTabHighlighted).toEqual(true);


		// Click on document text tab and check whether Document structure tab =should not be highlighted
		rightpanelpage.clickOnRightPanelTab(loaded.document_text);
		var expectedTabHighlighted = rightpanelpage.isHighlightedTabInRightPanelEquals(loaded.documnet_structure);
		expect(expectedTabHighlighted).toEqual(false);
		
		
	});
	
}, 50000);
