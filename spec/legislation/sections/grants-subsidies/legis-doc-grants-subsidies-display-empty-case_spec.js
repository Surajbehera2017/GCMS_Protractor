var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2340';
var testData = require('../../../../test-data/Jira_TestData/grants-subsidies/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
//GCMSQABANG-2340//
describe('Grants and Subsidies', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);

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

	//01 - Grants and subsidies - Empty case

	it('should verify for the empty grants and subsidies.'+jiraNum, function () {


        //(//strong[@class='ng-binding'][text()='Grants and Subsidies']//following:: *[contains(text(),'Import')])[1]
		browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(2000);
       
        //check for import button is disabled or not
       var importenabled= globalpo.isElementEnabled(loaded.importele);
       expect(importenabled).toEqual(true);

       collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        browser.sleep(2000);
        globalpo.clickSaveorCancel(loaded.yesbutton);
        browser.sleep(2000);

		
	});
});
