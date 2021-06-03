var params = browser.params;
var jiraNumber = 'GCMSQABANG-1670';
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loadedata=testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedata.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});


	/*
	 *   GCMSQABANG-1670:TC04 - Legislation Unit Edition - Item List Element - Edit - ItemizedList Elements
	 */
	it('Legislation Unit Edition Item List Element Edit ItemizedList Elements(GCMSQABANG-1670).'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickDocumentStructure();
		browser.waitForAngular();
		rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedata.unit,'Original');
		browser.waitForAngular();
		browser.sleep(1000);
		browser.switchTo().frame(loadedata.out_frame_id); // give id of iframe1
		browser.ignoreSynchronization = true;

		// adding itemizedlist and verifing if it is getting displayed or not
		browser.sleep(5000);
        rightpanelpage.clickCapatextoAndChildTabs(loadedata.capatexto); 
        rightpanelpage.moveToInsertAndSelectElement(loadedata.itemizedlist); 
		browser.sleep(1000);
		browser.switchTo().frame(loadedata.inside_frame_id);
		var listAdded = rightpanelpage.isItemizedListPresentXEditor();
		expect(listAdded).toEqual(true);


		// entering text and selecting  text

	 	rightpanelpage.enterText();

	 	//Entering Attribute mark as cuadradon

	    browser.switchTo().defaultContent();
	    browser.waitForAngular();
     	browser.sleep(1000);
	  browser.ignoreSynchronization = false;
	    browser.switchTo().frame(loadedata.out_frame_id); 
		browser.ignoreSynchronization = true;
		browser.sleep(2000);
	    rightpanelpage.fillMandotoryAttributeFields(loadedata.mark,loadedata.mark,loadedata.markValue);

	    //verifying if attribute contains updated value or not
	     
          expect(rightpanelpage.verifyAttributValue(loadedata.markValue)).toEqual(true);
	 
	        
	// verifying if  bullets have changed to a squares.
	    browser.sleep(1000);
		browser.switchTo().frame(loadedata.inside_frame_id);
		browser.ignoreSynchronization = true; 
		browser.waitForAngular();
		var updated = rightpanelpage.itemizedlistUpdatedTo(loadedata.markValue);
		expect(updated).toEqual(true);
		
		
	});

});







