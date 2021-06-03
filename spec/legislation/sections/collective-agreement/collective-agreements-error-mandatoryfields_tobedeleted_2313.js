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

    it('should display pop up the error message after change subtype and select sub range', function () {
        collectiveAgreementSection.expandGeneralData();        
        collectiveAgreementSection.selectDocumentType(2);//sets the drop down to the first index which has the string text of  Convenio Colectivo
        expect(collectiveAgreementSection.getSelectedDocumentType()).toEqual('Convenio Colectivo');
        browser.waitForAngular();
    });
    
       it('should be select sub range', function () {
        collectiveAgreementSection.expandSection();
        browser.waitForAngular();
        expect(collectiveAgreementSection.isExpanded()).toEqual(true);
        collectiveAgreementSection.clicksubrange();
        collectiveAgreementSection.selectsubrange();
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
    }; */
    
    
});
