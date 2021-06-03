var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var loadedData = testData.legislation.sections.collectiveagreement;

describe("Collective Agreements", function () {
      
      
    beforeEach(function () {
        
                browser.ignoreSynchronization = false;
                collectiveAgreementSection.get(loadedData.marginal_id);
                browser.waitForAngular();
                collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);
                browser.waitForAngular();
       }); 

    it('should copy the data from the original document', function () {
        collectiveAgreementSection.clickOnExitEditionmode();
        collectiveAgreementSection.clickOK();
        collectiveAgreementSection.clickCopyButtonBill();
        collectiveAgreementSection.clicktoselectcode();
        collectiveAgreementSection.selectcode();
        collectiveAgreementSection.clickCalculationButton();
        collectiveAgreementSection.clickAddPopupButton();
        collectiveAgreementSection.create();
        browser.waitForAngular();

    });
});


/**
 * Created by UC200668 on 7/26/2016.
 */