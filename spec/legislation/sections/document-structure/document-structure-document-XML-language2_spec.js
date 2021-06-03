var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNumber = 'GCMSQABANG-1858';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id_language);
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
 

	/*GCMSQABANG-1858
	 *  04 - Document with XML with language 2
	 */
	
	
	it('Document with XML with language 2.'+jiraNumber, function () {
	
		browser.waitForAngular();
		//Verify Document text tab is visible
		var docTextDisplayed = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
		expect(docTextDisplayed).toEqual(true);
		rightpanelpage.clickOnLanguageDropdownAndSelectALanguage(loaded.lableName,loaded.option);
		rightpanelpage.clickOnApplyOrCloseButton(loaded.buttonOption);

	// 	browser.driver.sleep(10000);
        
    //    var warningText = rightpanelpage.isWarningTextDisplayedDocumentText();
    //    expect(warningText).toEqual(true);
        
    //    var getWarning = rightpanelpage.getWarningTextDisplayedDocument();
    //     expect(getWarning).toContain(loaded.xml_language.warning_text_document_text);
        
		
	});
	
});
