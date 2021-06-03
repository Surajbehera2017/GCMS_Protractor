var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2432';

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
      
       
       
//TC04 - Grants and Subsidies - Add new document section - Document Creation

	it('Add new document section - Document Creation.'+jiraNum, function () {

                browser.sleep(2000);
                rightpanelpage.clickOnbuttonInEditMode(loaded.copybutton);
                browser.sleep(2000);
         
                globalpo.clickOnButtonForGlobal(loaded.calculatebutton);
                browser.sleep(1000);
                collectiveAgreementSection.clickAddCopy(loaded.copybutton);
                        
                globalpo.expandSectionInLeftPanel(loaded.generalsection);
                browser.sleep(1000);
                globalpo.selectValueDropdown(loaded.section,loaded.legistype);
                browser.sleep(4000);

                //expand statue data section and select value of 'Legislative Body' statdrop dateforce
                globalpo.expandSectionInLeftPanel(loaded.statuesection);
                browser.sleep(1000);
                globalpo.clickPlusOrWorldicon(loaded.provdate);
                browser.sleep(3000);
                collectiveAgreementSection.selectvalueSearchRemoveKeyword(loaded.search,loaded.aicv);
                browser.sleep(3000);
                globalpo.expandSectionInLeftPanel(loaded.validitysec); 
                //collectiveAgreementSection.enterDate(loaded.dateforce,loaded.date);
                grantsAndSubsidies.selectDateInForce(10);

                browser.sleep(3000);
                globalpo.clickPlusOrWorldicon('Main-Keyword');
                browser.sleep(1000);

                collectiveAgreementSection.clickSaveExitEdit(loaded.create);
                browser.sleep(2000);
                browser.waitForAngular();

                
                browser.sleep(2000);
                rightpanelpage.clickOnbuttonInEditMode(loaded.deletebutton);
                browser.sleep(2000);
                globalpo.clickOnButtonForGlobal(loaded.yesbutton);
                 browser.sleep(2000);
                
      
 });
});
            