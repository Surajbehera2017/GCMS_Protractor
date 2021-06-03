var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-3711';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
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
 
	//GCMSQABANG-3711: xEditor-externaltext-Editorial notes-Prints products edition_spec.js 
    
	    it('xEditor-externaltext-Editorial notes-Prints products edition.'+jiraNum, function () {

          //  browser.driver.manage().window().maximize();
                browser.waitForAngular();
                rightpanelpage.clickOnbuttonInEditMode('Edit');//click on Edit button
                browser.waitForAngular();
                browser.sleep(3000);
                globalpo.expandSectionInLeftPanel('Editorial Notes ');//expand editorial notes section
                browser.sleep(1000);
                rightpanelpage.clickonWordicon();//click on world icon in printproducts
                browser.waitForAngular();
                browser.sleep(1000);
                rightpanelpage.clickonCreateNota();//click on create note for Esponal
                browser.sleep(3000);
                browser.getAllWindowHandles().then(function(handles) {
                var newTabHandle = handles[1];
                browser.switchTo().window(newTabHandle).then(function () {
                browser.ignoreSynchronization = true;
                browser.sleep(3000);
                rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
                rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteFromXML);
                browser.sleep(2000);
                rightpanelpage.enterTextIntoPopup(loaded.xml);
                browser.sleep(2000);
                rightpanelpage.clickOnInsertOrCancel('Insert');
                browser.sleep(3000);
                                 
        });
        });
       
	});
	
});
