var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1714';
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
	 * GCMSQABANG-1714 TC34 -Add 1.0 Editor - Aranzadi - Bold button
	 */
	it('Unit Xeditor XML Content Bold button.'+jiraNumber,function () {
		
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
		browser.waitForAngular();
 
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);

		//Verify whether bold italics button is displayed
		var buttonValidated = rightpanelpage.isfontFormatOptionpresent(loaded.bold);
		expect(buttonValidated).toEqual(true);

       	//XML data for this test
		// var xmlText = '<nota ref="test" o=""/>note<abstract.summary></abstract.summary>';
		// var expectedXmlAfterReplacement = '<en-origen peso-fuente="negrita"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>';

		//Enter given content in XML Editor & verify new text is entered (Using Replace Button functionality)
		rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.replace);
		rightpanelpage.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(loaded.xmlText);
		var actualXMLText = rightpanelpage.getXMLTextInUnitPopUp();
		expect(actualXMLText).toEqual(loaded.xmlText);

		//Select first tag: <nota ref="test" o=""/>
		rightpanelpage.selectFirstTagInXMLTextInUnitPopUp();

		//Click on bolditalics button and verify new xml
		rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.bold);
		
		var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
		expect(newXMLText).toEqual(loaded.expectedXmlAfterReplacement);

		//Click Cancel Button in pop-up
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
       

	});

});
