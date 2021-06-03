var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber = 'GCMSQABANG-1707';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username, params.valid_password);

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
	 *  GCMSQABANG-1707 TC24 -Add 1.0 Editor - Aranzadi - Replace button
	 */
	it('Unit Xeditor Aranzadi Replace button.'+jiraNumber, function () {

		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
		browser.waitForAngular();

		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);

		//Verify whether button is displayed
		var buttonValidated = rightpanelpage.isfontFormatOptionpresent(loaded.replace);

		//XML data for this test
		// var xmlText = '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>';
		// var replaceAllText = 'texto';
		// var replaceWithText = 'replace';
		// var expectedXmlAfterReplacement = loaded.expectedXmlAfterReplacement;
		
		//Click Replace button
		rightpanelpage.clickOnApplyOrCloseButton('editor.replaceCM');

		//Verify the buttons are displayed
		var buttonValidated = rightpanelpage.isfontFormatOptionpresent(loaded.replace_all);
		var searchBoxDisplayed = rightpanelpage.isSearchFieldInputDisplayedInUnitPopUp();
		expect(searchBoxDisplayed).toEqual(true);

		//Write data to search field(Replace All) and press enter
		rightpanelpage.sendKeyToSearchInputFieldAndPressEnter(loaded.replaceAllText);

		//Write data to search field(Replace With) and press enter
		rightpanelpage.sendKeyToSearchInputFieldAndPressEnter(loaded.replaceWithText);
	
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(3000);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(3000);
		
		//Verify expectedXmlAfterReplacement
		expect(rightpanelpage.getXMLTextInUnitPopUp()).toEqual(loaded.expectedXmlAfterReplacement);

		//Click Cancel Button in pop-up
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();


	});

});