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
    
	it('should select sector/subsector from dropdown', function () {
        browser.waitForAngular();
        collectiveAgreementSection.expandSection();
         browser.waitForAngular();
         expect(collectiveAgreementSection.isExpanded()).toEqual(true);
         collectiveAgreementSection.clickSearchSector();
        expect(collectiveAgreementSection.displaySearchSector()).toEqual(true);
        collectiveAgreementSection.clickSectoresFolder();
        expect(collectiveAgreementSection.displaySectoresFolder()).toEqual(true);
        collectiveAgreementSection.clickSectoresRadioButton();
        expect(collectiveAgreementSection.isVisibleSectoresFolder()).toEqual(true);
       collectiveAgreementSection.clickSaveSectoresButton();
      //   expect(collectiveAgreementSection.displaySaveButton()).toEqual(true);
         collectiveAgreementSection.save();
	});
    

    
});


