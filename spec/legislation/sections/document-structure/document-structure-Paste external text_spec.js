var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1842';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
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
 
//GCMSQABANG-1842 : 01 - xEditor - Paste external text
   
    it('Paste external text.'+jiraNum, function () {

    
        browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        browser.waitForAngular();
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.unit_Name,loaded.Original); //right click on oroginal and select Edit visual
        browser.waitForAngular();
        rightpanelpage.clickonXEditorExpandButton();
        browser.sleep(3000);
        browser.switchTo().frame(loaded.out_frame_id); // give id of iframe
        browser.ignoreSynchronization = true; 
        browser.sleep(4000);  
        
        rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
        rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteExternalText);//select the option paste from external text
        rightpanelpage.enterTextIntoPopup(loaded.text); //enter the text in the paste from external text box
        browser.sleep(1000);
        rightpanelpage.clickOnInsertOrCancel('Insert');
        browser.sleep(5000);
        browser.switchTo().defaultContent();
       // browser.ignoreSynchronization = false;
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.sleep(5000);
    
                  
         
  });
});
