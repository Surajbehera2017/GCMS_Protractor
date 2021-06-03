var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2341';
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


	//02 - Grants and subsidies - One language

	it('should verify details for grants and subsidies section.'+jiraNum, function () {
		
		browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
		browser.sleep(1000);
		
		globalpo.expandSectionInLeftPanel(loaded.modulename);
		browser.sleep(1000);
		var subjectgrantpresent=globalpo.isElementDisplayed(loaded.subjectgrant);
		expect(subjectgrantpresent).toEqual(true);

		var benefeciarypresent=globalpo.isElementDisplayed(loaded.beneficiaries);
		expect(benefeciarypresent).toEqual(true);

		collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        browser.sleep(1000);
        globalpo.clickSaveorCancel(loaded.yesbutton);
        browser.sleep(1000);


		
	});
});
