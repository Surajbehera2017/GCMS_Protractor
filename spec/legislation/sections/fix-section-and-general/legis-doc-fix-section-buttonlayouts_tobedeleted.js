var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var loadedData = testData.legislation.sections.fix_section_and_general;
describe('Fix section', function () {

	beforeEach(function () {
      
        browser.ignoreSynchronization = false;       
        LegislationDocumentDisplayPage.get(loadedData.marginal_id);         
        browser.waitForAngular();
		LegislationDocumentDisplayPage.urlLoad(params.valid_username, params.valid_password);
		browser.sleep(5000);
		browser.waitForAngular();
    });
    
    it('should have a go to previous  button ', function () {
      
		expect(LegislationDocumentDisplayPage.hasPreviousDocumentButton()).toEqual(true);
    	expect(LegislationDocumentDisplayPage.isPreviousDocumentButtonEnabled()).toBeFalsy();
        
        expect(LegislationDocumentDisplayPage.hasLastDocumentButton()).toEqual(true);
		expect(LegislationDocumentDisplayPage.isLastDocumentButtonEnabled()).toBeFalsy();
        
        expect(LegislationDocumentDisplayPage.title()).toEqual(I18n.legisDocDisplay.title);
        expect(LegislationDocumentDisplayPage.marginal()).toEqual(testData.legislation.sections.fix_section_and_general.document_no);
        expect(LegislationDocumentDisplayPage.hasAddButton()).toEqual(true);
        expect(LegislationDocumentDisplayPage.isAddButtonEnabled()).toEqual(true);
        
        expect(LegislationDocumentDisplayPage.hasCopyButton()).toEqual(true);
        expect(LegislationDocumentDisplayPage.isCopyButtonEnabled()).toEqual(true);
        
        expect(LegislationDocumentDisplayPage.hasEditButton()).toEqual(true);
		expect(LegislationDocumentDisplayPage.isEditButtonEnabled()).toEqual(true);
        
        expect(LegislationDocumentDisplayPage.hasDeleteButton()).toEqual(true);
		expect(LegislationDocumentDisplayPage.isDeleteButtonEnabled()).toEqual(true);
        
        expect(LegislationDocumentDisplayPage.hasPrintButton()).toEqual(true);
        expect(LegislationDocumentDisplayPage.isPrintButtonEnabled()).toEqual(true);
        
        expect(LegislationDocumentDisplayPage.hasExportButton()).toEqual(true);
        expect(LegislationDocumentDisplayPage.isExportButtonEnabled()).toEqual(true);
        
        expect(LegislationDocumentDisplayPage.hasNavigationInput()).toEqual(true);
		expect(LegislationDocumentDisplayPage.isNavigationInputEnabled()).toEqual(false);
        
        expect(LegislationDocumentDisplayPage.hasFirstDocumentButton()).toEqual(true);
		expect(LegislationDocumentDisplayPage.isFirstDocumentButtonEnabled()).toBeFalsy();
        
        expect(LegislationDocumentDisplayPage.hasNextDocumentButton()).toEqual(true);
		expect(LegislationDocumentDisplayPage.isNextDocumentButtonEnabled()).toBeFalsy();
      
		
	});
    
});   

