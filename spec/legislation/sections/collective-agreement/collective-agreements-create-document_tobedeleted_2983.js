var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2454';
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

    it('should create a new document', function () {
        browser.waitForAngular();
        collectiveAgreementSection.clickOnExitEditionmode();
        collectiveAgreementSection.clickOK();
        collectiveAgreementSection.clickAddButtonBill();
        collectiveAgreementSection.clicktoselectcode();
       collectiveAgreementSection.selectthecode();
       browser.waitForAngular();
       collectiveAgreementSection.clickCalculationButton();
       browser.waitForAngular();
       collectiveAgreementSection.clickAddPopupButton();
       collectiveAgreementSection.expandGeneralData();        
       collectiveAgreementSection.selectDocumentType(2);//sets the drop down to the first index which has the string text of  Convenio Colectivo
       expect(collectiveAgreementSection.getSelectedDocumentType()).toEqual('Convenio Colectivo');
       collectiveAgreementSection.clickjurisdiction();
       collectiveAgreementSection.addjurisdiction();
       collectiveAgreementSection.expandStatuteData();
       collectiveAgreementSection.selectStatuteType();
       collectiveAgreementSection.addProvisionDate();
       collectiveAgreementSection.addMainKeyword();
       collectiveAgreementSection.expandPublicationData();
       collectiveAgreementSection.addPublication();
       collectiveAgreementSection.adddatenumberseries();
       collectiveAgreementSection.expandPracticeArea();
       collectiveAgreementSection.addPracticeArea();
       collectiveAgreementSection.expandSection();
       browser.waitForAngular();
       expect(collectiveAgreementSection.isExpanded()).toEqual(true);
       collectiveAgreementSection.addsubRange2();
       collectiveAgreementSection.create();
    });

});



