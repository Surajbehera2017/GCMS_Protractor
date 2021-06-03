var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2318';
var jiraNum1='GCMSQABANG-2487';
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
    
	it('Copy a doc with the collective agreements section.'+jiraNum+'.'+jiraNum1, function () {
            
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.copybutton);
        browser.sleep(2000);

        collectiveAgreementSection.enterMarginalIdImport('Code','RCL');
        browser.sleep(1000);
        
        globalpo.clickOnButtonForGlobal(loaded.calculatebutton);
        browser.sleep(1000);
        collectiveAgreementSection.clickAddCopy('Copy');
        browser.sleep(3000);
         //expand collective agreement section & check for copied values
        globalpo.expandSectionInLeftPanel(loaded.modulename);
        browser.sleep(1000);
        //check for subrange value
        var elementpresent=globalpo.isElementPresent(loaded.element1);
        expect(elementpresent).toEqual(true);
        //check for sector/subsector value
        var elementpresent1=globalpo.isElementPresent(loaded.element2);
        expect(elementpresent1).toEqual(true);
        //expand statuedata section to enter the key word value
        globalpo.expandSectionInLeftPanel(loaded.statuedata);
        browser.sleep(1000);
        collectiveAgreementSection.selectvalueSearchRemoveKeyword('Search','AICV');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Provision Date');
        collectiveAgreementSection.clickSaveExitEdit('Create');
        browser.sleep(2000);
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.deletebutton);
        browser.sleep(2000);
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);
        browser.sleep(2000);


        
         });
     
        
	});
       

