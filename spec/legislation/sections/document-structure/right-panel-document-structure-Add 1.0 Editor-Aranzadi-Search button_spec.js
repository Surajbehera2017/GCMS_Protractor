var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1706';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
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

	 /*
	// 	 *  GCMSQABANG-1706 TC23 -Add 1.0 Editor - Aranzadi - Search button
	 */
    
    it('Unit Xeditor Aranzadi Search button.'+jiraNumber, function () {
	
		
		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
		browser.waitForAngular();
 
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);

		//Verify whether button is displayed
		var buttonValidated = rightpanelpage.isfontFormatOptionpresent(loaded.search);
		
		//XML data for this test
		// var xmlText = '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>';
		
		var xmlText = rightpanelpage.getXMLTextInUnitPopUp();
		// var replaceAllText ='texto';
		// var replaceWithText ='replaced';
		// var expectedXmlAfterReplacement = loaded.expectedXmlAfterReplacement;
		
		//Click Search button
		rightpanelpage.clickOnApplyOrCloseButton('editor.clearSearchCM');

		var replaceAllTextFound = rightpanelpage.isXMLTextInUnitPopUpContains(loaded.replaceAllText);
		expect(rightpanelpage.getXMLTextInUnitPopUp()).toEqual(loaded.expectedXmlAfterReplacement);
				
		//Click Cancel Button in pop-up
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();      


  });
 });

