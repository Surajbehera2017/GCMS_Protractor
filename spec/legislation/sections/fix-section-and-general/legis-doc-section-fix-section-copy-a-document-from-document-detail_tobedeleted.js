var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');


describe('Fix section', function () {

    beforeAll(function () {
      
        browser.ignoreSynchronization = false;      
        LegislationDocumentDisplayPage.get(testData.legislation.sections.fix_section_and_general.marginal_id);
        browser.waitForAngular();
        LegislationDocumentDisplayPage.urlLoad(params.valid_username, params.valid_password);
		browser.sleep(5000);
		browser.waitForAngular();         
    });
    
    it('should copy the  document from document detail sucessfully',function(){
      
        expect(LegislationDocumentDisplayPage.hasAddButton()).toEqual(true);
        LegislationDocumentDisplayPage.clickCopyButton();
        expect(LegislationDocumentDisplayPage.isPopupNotDisplayed()).toEqual(false);
        LegislationDocumentDisplayPage.selectcode('LEG - Legislación');
		LegislationDocumentDisplayPage.enterYear('2013');
		LegislationDocumentDisplayPage.enterNumber('84576');
	    LegislationDocumentDisplayPage.enterText();
        LegislationDocumentDisplayPage.clickCopyOnCopyDocPopup();
	   expect(LegislationDocumentDisplayPage.getMarginalNumber()).toEqual('LEG\\2013\\84576 Test');			
    });
});

    
