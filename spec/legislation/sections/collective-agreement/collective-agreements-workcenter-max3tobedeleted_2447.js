var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var loadedData = testData.legislation.sections.collective_agreement;

describe("Collective Agreements", function () {
      
      
    beforeEach(function () {
        
                browser.ignoreSynchronization = false;
                collectiveAgreementSection.get(loadedData.marginal_id);
                browser.waitForAngular();
                collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);
                browser.waitForAngular();
       }); 
    

    it('should be select subtype and sub range and should be select company and enter work center fields', function () {
        collectiveAgreementSection.expandGeneralData();        
        collectiveAgreementSection.selectDocumentType(2);//sets the drop down to the first index which has the string text of  Convenio Colectivo
        expect(collectiveAgreementSection.getSelectedDocumentType()).toEqual('Convenio Colectivo');
        collectiveAgreementSection.expandSection();
        browser.waitForAngular();
        expect(collectiveAgreementSection.isExpanded()).toEqual(true);
        collectiveAgreementSection.clicksubrange();
        collectiveAgreementSection.selectsubrange();
        collectiveAgreementSection.clicksectorandsubsector();
        collectiveAgreementSection.clickleafterm();
        collectiveAgreementSection.selectsectorradioButton();
        collectiveAgreementSection.clickselectButton();
        browser.waitForAngular();
        collectiveAgreementSection.clickcompanySelect();
        expect(collectiveAgreementSection.haschangeCompanyserchbox()).toEqual(true);
       collectiveAgreementSection.changecompany();
         //expect(collectiveAgreementSection.hascompanysearchButton).toEqual(true);
      collectiveAgreementSection.clickcompanysearchButton();                        //expect(collectiveAgreementSection.hasItem('112 Asturias').toEqual(true);
        expect(collectiveAgreementSection.hasworkcenterfreetext1()).toEqual(true);
         collectiveAgreementSection.addfreetext1();
        collectiveAgreementSection.clickaddworkcentericon();
        expect(collectiveAgreementSection.hasworkcenterfreetext2()).toEqual(true);
        collectiveAgreementSection.addfreetext2();
        collectiveAgreementSection.clickaddworkcentericon();
         expect(collectiveAgreementSection.hasworkcenterfreetext3()).toEqual(true);
        collectiveAgreementSection.addfreetext3();
        expect(collectiveAgreementSection.hasaddworkcentericon()).toEqual(false);
        browser.waitForAngular();
        collectiveAgreementSection.save();
        browser.waitForAngular();    
    });

    
 /*   var selectDropdownbyNum = function (element, optionNum) {
        if (optionNum) {
            var options = element.getWebElement().findElements(by.tagName('option'))
                .then(function (options) {
                    options[optionNum].click();

                });

        }
    };*/


});












