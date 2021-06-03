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
    
	it('should check the collective-agreement section is present or not', function () {
        browser.waitForAngular();
        collectiveAgreementSection.expandSection();
         browser.waitForAngular();
         expect(collectiveAgreementSection.isExpanded()).toEqual(true);
           
		});
        
	});
    

    
    



