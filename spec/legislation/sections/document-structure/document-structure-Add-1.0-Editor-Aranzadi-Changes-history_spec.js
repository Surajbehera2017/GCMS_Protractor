var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1726';
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

//GCMSQABANG-1726 TC46 -Add 1.0 Editor - Aranzadi - Changes history

it('Aranzadi - Changes history.'+jiraNumber,function () {

    browser.waitForAngular();
    rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
    browser.waitForAngular();
    rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
    browser.waitForAngular();

    //Verify pop-up displayed
    var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
    expect(popup).toEqual(true);

    //Enter given content in XML Editor & verify new text is entered (Using Replace Button functionality)
    rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.replace);
    browser.waitForAngular();
    rightpanelpage.enterTextInReplaceSearchBox(loaded.text1,loaded.text2);

        browser.waitForAngular();

    //select all the text in the editor popup
        rightpanelpage.selectAllText();
    
    //click on justify button
        rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.justify);
    
    //check whether the expected text is present in the editor popup
    
    
    
      // var  expectedXmlAfterReplacement='<parrafo alineacion-texto="justificado"><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo></capa.texto></capa></unidad></unidad></texto></parrafo>';
    
        var newXMLText = rightpanelpage.getXMLTextInUnitPopUp();
        expect(newXMLText).toEqual(loaded.expectedXmlAfterReplacement);

    
    //Verify whether change history button is displayed
    var buttondisplayed = rightpanelpage.isdisplayedofSideBarButton(loaded.change_history);
    expect(buttondisplayed).toEqual(true);

    //click on change history button
    rightpanelpage.clickOnSideBarButton(loaded.change_history);
    
    //click on the cancel button
    rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
    


});
});