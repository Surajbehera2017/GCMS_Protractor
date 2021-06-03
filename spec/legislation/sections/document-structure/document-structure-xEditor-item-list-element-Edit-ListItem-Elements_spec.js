var params = browser.params;
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1671';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	/*
	 *   GCMSQABANG-1671 - Legislation Unit Edition - Item List Element - Edit - ListItem Elements
	 */
	it('Legislation Unit Edition Item List Element Edit ListItem Elements.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit,'Original');
		browser.waitForAngular();
		browser.switchTo().frame(loadedData.out_frame_id); // give id of iframe1
		browser.ignoreSynchronization = true;	
		browser.sleep(5000); 


		// adding itemizedlist and verifing if it is getting displayed or not
		rightpanelpage.clickCapatextoAndChildTabs(loadedData.capatexto);
		rightpanelpage.moveToInsertAndSelectElement(loadedData.itemizedlist);
		browser.sleep(3000);
		browser.switchTo().frame(loadedData.inside_frame_id);
		var listAdded = rightpanelpage.isItemizedListPresentXEditor();
		expect(listAdded).toEqual(true);
		
		//Verify adding itemized list from listitems (already existing list)
		rightpanelpage.addItemizedListForFirstExistingItemizedListPresentXEditor();
		listAdded = rightpanelpage.isSecondItemizedListPresentInXEditor();
		expect(listAdded).toEqual(true);

		 //Verify adding Ordered list from listitems (already existing list)
		 rightpanelpage.addOrderedListForFirstExistingItemizedListPresentXEditor();		 
		 listAdded = rightpanelpage.isOrderListPresentXEditor();
		 expect(listAdded).toEqual(true);
		
		 //Verify adding Paraffo from listitems (already existing list)
		 rightpanelpage.addParaffoForFirstExistingItemizedListPresentInXEditor();
		 browser.sleep(5000);
		 paraAdded = rightpanelpage.isParaffoPresentInFirstExistingItemizedListPresentInXEditor();
		 expect(paraAdded).toEqual(true);
		
	});

});







