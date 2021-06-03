var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2321';
var testData = require('../../../../test-data/Jira_TestData/collective-agreement/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

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
        
    it('should check PeriododDeUltraactividad and FechaFinDeUltraactividadin in collective-agreement section is present or not.'+jiraNum, function () {
       
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(4000);
       
        globalpo.expandSectionInLeftPanel(loaded.modulename);
        browser.sleep(3000);

        // var elementpresent= globalpo.isElementPresent(loaded.element1);
        // expect(elementpresent).toEqual(true);

        // var elementpresent1=globalpo.isElementPresent(loaded.element2);
        // expect(elementpresent1).toEqual(true);

        var worldiconpresent= globalpo.isElementPresent(loaded.worldicon);
        expect(worldiconpresent).toEqual(true);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(4000);
        globalpo.clickSaveorCancel('Save');
        browser.sleep(5000);
        
		
});

    
     });


