var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2315';
var jiraNum1='GCMSQABANG-3185';
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
   
    it('Should add max 10 Company.'+jiraNum+'.'+jiraNum1, function () {
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(4000);
       
        globalpo.expandSectionInLeftPanel(loaded.modulename);
        browser.sleep(1000);
        collectiveAgreementSection.selectCompanySubrangeDropdown(loaded.feildname,loaded.companyname);
        //adding the companies
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Company');

        //removing the companies
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.toDeletetheFeilds('Company');
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(1000);
        globalpo.clickSaveorCancel(loaded.savebutton);
        browser.sleep(4000);
        
        });
    });


