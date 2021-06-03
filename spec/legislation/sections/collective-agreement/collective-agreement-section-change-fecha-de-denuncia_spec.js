var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2975';
var jiraNum1='GCMSQABANG-2449';
var testData = require('../../../../test-data/Jira_TestData/collective-agreement/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
//75681302
describe("Collective Agreements", function () {
      

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
    
	it('should select sector/subsector Change Fecha de Denuncia.'+jiraNum+'.'+jiraNum1, function () {

                browser.waitForAngular();
                rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
                browser.sleep(2000);
        
                globalpo.expandSectionInLeftPanel(loaded.modulename);
                browser.sleep(2000);

                collectiveAgreementSection.enterDate('Fecha de denuncia','03/07/2018');
              

                collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
                globalpo.clickSaveorCancel('Save');
                browser.sleep(3000);
                //check for the flag +sysmbol present
                var flagpresent= globalpo.isElementDisplayed('(//i[@id="document-deatil-flag-plus"])[2]');
                expect(flagpresent).toEqual(true);

                rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
                browser.sleep(2000);
        
                globalpo.expandSectionInLeftPanel(loaded.modulename);
                browser.sleep(1000);
                collectiveAgreementSection.enterDate('Fecha de denuncia',' ');
                collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
                //chek for the flag + symbol not present
                browser.sleep(3000);
                globalpo.clickSaveorCancel('Save');
                browser.sleep(2000);
                var flagpresent= globalpo.isElementDisplayed('(//i[@id="document-deatil-flag-plus"])[2]');
                expect(flagpresent).toEqual(false);

	});
});


