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
    
	it('should type inside "Fecha de Denuncia" field with an old date', function () {
        browser.waitForAngular();
        collectiveAgreementSection.expandSection();
         browser.waitForAngular();
         expect(collectiveAgreementSection.isExpanded()).toEqual(true);
  element(by.css('#collectiveAgreementsUltraActivityDate')).element(by.css('input[format-model="dd/MM/yyyy"]')).clear();
   element(by.css('#collectiveAgreementsUltraActivityDate')).element(by.css('input[format-model="dd/MM/yyyy"]')).sendKeys('07/08/2005');
   collectiveAgreementSection.save();
   browser.waitForAngular();
                });
});
    



