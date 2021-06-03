var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2343';
var testData = require('../../../../test-data/Jira_TestData/grants-subsidies/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
//var legisDocDisplayPage=new LegislationDocumentDisplayPage(); GCMSQABANG-2343


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
       
   //01 - Grants and subsidies - UI Edition
     
	    it('should verify details for grants and subsidies section in edit mode.'+jiraNum, function () {
            
            browser.waitForAngular();
                rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
                browser.sleep(2000);
                //expand grants&subsidy moduele to check it is present
                globalpo.expandSectionInLeftPanel(loaded.grantsmodule);
                browser.sleep(1000);
                var GandSPresent=globalpo.isElementDisplayed(loaded.Grantsubsidy);
                expect(GandSPresent).toEqual(true);
                browser.sleep(1000);

               //check for beneficiary,subjectofgrant present
                var benefeciarypresent=globalpo.isElementPresent(loaded.beneficiary);
                expect(benefeciarypresent).toEqual(true);

                var benefeciarypresent=globalpo.isElementPresent(loaded.subgrant);
                expect(benefeciarypresent).toEqual(true);
                
                collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
                browser.sleep(2000);
                globalpo.clickSaveorCancel(loaded.savebutton);
                browser.sleep(2000);
        
        });
		
});

