var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber='GCMSQABANG-1715';
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
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
	 *  GCMSQABANG-1715 TC35 -Add 1.0 Editor - Aranzadi - Italic button
	 */
	it('Unit Xeditor XML Content Italic button.'+jiraNumber, function () {
		/*
		 * Goal of this test is to verify 'Italic' button adds specific tag for selected content. 
		 * Hence using hard coded data.
		 */ 

		browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.waitForAngular();
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
		browser.waitForAngular();
 
		//Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);

		//Verify Italic button is displayed
		var buttonValidated = rightpanelpage.isfontFormatOptionpresent(loaded.bold_italics);
		expect(buttonValidated).toEqual(true);

		//XML data for this test
		// var xmlText = '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>';
		// var expectedXmlAfterclick = '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>';
		//var expectedXmlAfterclick = '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>' to equal '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>';
		
		//Click Italic button
		rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.bold_italics);

		//Verify the xml after clicking on bold italic button
		loaded.xmlText==loaded.expectedXmlAfterclick
					
		//Click Cancel Button in pop-up
		rightpanelpage.clickCancelButtonInModalUnitEditPopUp();


	});

});
