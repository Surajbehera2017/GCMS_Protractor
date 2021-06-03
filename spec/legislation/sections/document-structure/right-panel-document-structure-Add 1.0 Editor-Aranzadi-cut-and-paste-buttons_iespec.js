var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1710';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id_xml);
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
	 * GCMSQABANG-1710 TC28 -Add 1.0 Editor - Aranzadi - Cut button
	 */
	//works on ie browser only
	it('Unit Xeditor XML Content Cut Paste using buttons.'+jiraNumber, function () {
		/*
		 * Goal of this test is to verify 'Cut & Paste' in xml content. Hence using hard coded data.
		 */ 

		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
		browser.waitForAngular();
 
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);

		//Verify Cut button is displayed
		var buttonValidated = rightpanelpage.isfontFormatOptionpresent(loaded.cut);
		expect(buttonValidated).toEqual(true);


		//XML data for this 
		var xmlText = '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>';
		var cutText ='<nota ref="test" o=""/>';
		var expectedXmlAfterReplacement = 'note<abstract.summary></abstract.summary><nota ref="test" o=""/>';

		//Enter given content in XML Editor & verify new text is entered (Using Replace Button functionality)
		
		rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.replace);
		rightpanelpage.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(xmlText);
		var actualXMLText = rightpanelpage.getXMLTextInUnitPopUp();
		expect(actualXMLText).toEqual(xmlText);

		//Select first tag: <nota ref="test" o=""/>
		rightpanelpage.selectFirstTagInXMLTextInUnitPopUp();

		//Cut selected text & verify the text is no more displayed
		rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.cut);
		var cutTextDisplayed = rightpanelpage.isXMLTextInUnitPopUpContains(cutText);
		expect(cutTextDisplayed).toEqual(false);

		//Paste the text at the end & verify the text is displayed
		rightpanelpage.moveCursorToTheEndOfTagInXMLText(1);
		rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.paste);
		var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
		expect(newXMLText).toEqual(expectedXmlAfterReplacement);

		//Click Cancel Button in pop-up
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();

	});

});
