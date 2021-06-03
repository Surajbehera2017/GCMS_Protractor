var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2314';
var testData = require('../../../../test-data/Jira_TestData/collective-agreement/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

describe("Collective Agreements", function () {
      
      
    beforeEach(function () {
        
                browser.ignoreSynchronization = false;
                collectiveAgreementSection.get(loadedData.marginal_id);
                browser.waitForAngular();
                collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);
                browser.waitForAngular();
       }); 

    it('should display pop up the error message after change subtype and select sub range', function () {
       // expect(collectiveAgreementSection.isExpanded()).toEqual(false);
       browser.waitForAngular();
       collectiveAgreementSection.expandSection();
        browser.waitForAngular();
        expect(collectiveAgreementSection.isExpanded()).toEqual(true);
        collectiveAgreementSection.expandGeneralData();        
        collectiveAgreementSection.selectDocumentType(2);//sets the drop down to the first index which has the string text of  Convenio Colectivo
        expect(collectiveAgreementSection.getSelectedDocumentType()).toEqual('Convenio Colectivo');
        //to do - also verify Collective section is displayed on selecting 'Convenio Colectivo'
        expect(collectiveAgreementSection.collectivesectionisdisplayed()).toEqual('Convenio Colectivo');
        browser.waitForAngular();
    });

   it('should be select subtype and sub range', function () {
        
        
        expect(collectiveAgreementSection.isExpanded()).toEqual(false);
        collectiveAgreementSection.expandSection();
            expect(collectiveAgreementSection.isExpanded()).toEqual(true);
            collectiveAgreementSection.clicksubrange();
                collectiveAgreementSection.selectsubrange();
                    collectiveAgreementSection.clicksectorandsubsector();
                        collectiveAgreementSection.clickleafterm();
                            collectiveAgreementSection.selectsectorradioButton();
                                collectiveAgreementSection.clickselectButton();
                                browser.waitForAngular();

    }); 

   it('should be select company and enter work center fields', function () {
        
        
        collectiveAgreementSection.expandSection();
            expect(collectiveAgreementSection.isExpanded()).toEqual(true);
        collectiveAgreementSection.clickcompanySelect();
            expect(collectiveAgreementSection.haschangeCompanyserchbox()).toEqual(true);
          collectiveAgreementSection.changecompany('112 Asturias');
                //expect(collectiveAgreementSection.hascompanysearchButton).toEqual(true);
                 collectiveAgreementSection.clickcompanysearchButton();
                    collectiveAgreementSection.clickitemlistforcompany();
                        //expect(collectiveAgreementSection.hasItem('112 Asturias').toEqual(true);
                        expect(collectiveAgreementSection.hasworkcenterfreetext1()).toEqual(true);
                        collectiveAgreementSection.addfreetext1('text1');
                       collectiveAgreementSection.save();
                                expect(collectiveAgreementSection.title()).toEqual(I18n.legisDocDisplay.title);
                                browser.waitForAngular();  

   /* var selectDropdownbyNum = function (element, optionNum) {
        if (optionNum) {
            var options = element.getWebElement().findElements(by.tagName('option'))
                .then(function (options) {
                    options[optionNum].click();

                });


        };
    };*/

}); 
});











