var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2433';
var testData = require('../../../../test-data/Jira_TestData/grants-subsidies/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

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
      
   //TC01 - Grants and Subsidies - Copy a document document - Layout
   
it('Copy a document document - Layout.' +jiraNum, function () {
        
        
        browser.sleep(9000);
        rightpanelpage.clickOnbuttonInEditMode(loaded.copybutton);
        browser.sleep(2000);

        globalpo.clickOnButtonForGlobal(loaded.calculatebutton);
        browser.sleep(1000);
        collectiveAgreementSection.clickAddCopy(loaded.copybutton);
        browser.sleep(3000);

        //expand generaldata section to select the doc type "legislation"
        globalpo.expandSectionInLeftPanel(loaded.generaldata);
        browser.sleep(1000);
        globalpo.selectValueDropdown(loaded.section,loaded.legistype);
        browser.sleep(1000);
        //check for grants and subsides section appears
        var GandSPresent=globalpo.isElementDisplayed(loaded.Grantsubsidy);
        expect(GandSPresent).toEqual(true);
        browser.sleep(2000);

       //expand generaldata section to select the doc type "Otras disposiciones"
       
        globalpo.selectValueDropdown(loaded.section,loaded.Otrastype);
        browser.sleep(1000);
        //check for grants and subsides section appears
        var GandSElementPresent=globalpo.isElementDisplayed(loaded.Grantsubsidy);
        expect(GandSElementPresent).toEqual(true);
        browser.sleep(2000);

        //expand generaldata section to select the doc type "Actos Preparatorios"
       
       globalpo.selectValueDropdown(loaded.section,loaded.Actostype);
       browser.sleep(1000);
       //check for grants and subsides section appears
       var GrantssubsidesPresent=globalpo.isElementDisplayed(loaded.Grantsubsidy);
       expect(GrantssubsidesPresent).toEqual(false);
       browser.sleep(2000);

       //expand generaldata section to select the doc type "Convenio Colectivo"
       // globalpo.expandSectionInLeftPanel(loaded.modulename1);
       globalpo.selectValueDropdown(loaded.section,loaded.Convenio);
       browser.sleep(2000);
       //check for grants and subsides section appears
       var GrantsubsidesPresent=globalpo.isElementDisplayed(loaded.Grantsubsidy);
       expect(GrantsubsidesPresent).toEqual(false);
       browser.sleep(2000);

       //expand generaldata section to select the doc type "Comunicaciones e informaciones"
       // globalpo.expandSectionInLeftPanel(loaded.modulename1);
       globalpo.selectValueDropdown(loaded.section,loaded.Comunicacionestype);
       browser.sleep(2000);
       //check for grants and subsides section appears
       var GrantssubsidesPresent=globalpo.isElementDisplayed(loaded.Grantsubsidy);
       expect(GrantssubsidesPresent).toEqual(false);
       browser.sleep(2000);

        collectiveAgreementSection.clickSaveExitEdit(loaded.exitcopybutton);
        browser.sleep(2000);
        browser.waitForAngular();
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);
        browser.sleep(2000);

        
  });

});
