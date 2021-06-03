var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2886';

var testData = require('../../../../test-data/Jira_TestData/Left-panel/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];


describe('Left-panel', function () {

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

	
  it('verify add Button.'+jiraNum, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(2000);

        //to check for add button in edit mode
        var addbuttonpresent=globalpo.isElementDisplayed(loaded.addbuttonelement);
        expect(addbuttonpresent).toEqual(false);

        collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        browser.sleep(2000);
        globalpo.clickSaveorCancel(loaded.yesbutton);
        browser.sleep(2000);

     });
});
    
    
    
    
    

    
