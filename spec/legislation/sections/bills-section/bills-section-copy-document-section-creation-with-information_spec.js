var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');
var billSection = require('../../../../po/document/display/legis/sections/bills-section/bills-new.po.js');

describe('Bill Section', function () {

    beforeAll(function () {
        
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills);
        billSection.urlLoad(params.valid_username,params.valid_password);
               
    });
	
    it('should verify copy document bill section ceartion with information', function () {
		
	
        browser.waitForAngular();
        billSection.clickCopyButtonBill();
        billSection.selectcode(testData.legislation.sections.bills.document_code);
        browser.sleep(3000);
        billSection.clickCalculationButton();
        billSection.clickCopyPopupButton();
        billSection.clickGeneral();
        billSection.selectDocument();
        billSection.clickJurisdiction();
        billSection.enterJurisdictionSearchText();
        billSection.clickJurisdictionSearch();
        billSection.selectJurisdictionSearch();
        billSection.clickGeneralExpand();
        billSection.clickStatuteData();
        browser.waitForAngular();
              
        billSection.clickLegislativeBodyNew();
        billSection.sendKeyToLegislativeBody(testData.legislation.sections.bills.legislativeBodyText);
        billSection.clickSearchBtnLegislativeBody();
        browser.waitForAngular();
        billSection.clickonSelectedOptionLegislativeBody();
        browser.waitForAngular();

        billSection.clickonStatusType();
        billSection.sendKeyToStatusType(testData.legislation.sections.bills.change_statute_value);
        billSection.clickSearchBtnStatueType();
        browser.waitForAngular();
        billSection.clickSelectedOptionStatusType();
        browser.waitForAngular();

        billSection.clickprovisonDateButton();
        billSection.legismainKeyword(testData.legislation.sections.bills.mainKeyword);

                      
    });
});
              
          
          
