var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');


describe('Fix section', function () {

    
 beforeEach(function () {
   
      browser.ignoreSynchronization = false;        
	  LegislationDocumentDisplayPage.get(testData.legislation.sections.fix_section_and_general.marginal_id);
      browser.waitForAngular();
      LegislationDocumentDisplayPage.urlLoad(params.valid_username, params.valid_password);
      browser.sleep(5000);
      browser.waitForAngular();
  });
     it('should verify the packaging button functionality', function () {
    
        LegislationDocumentDisplayPage.clickExportButton();
        expect( LegislationDocumentDisplayPage.package()).toEqual(I18n.documentDetails.exportbuttontext);
        LegislationDocumentDisplayPage.clickCancelDeleteExportButton ();
        expect( LegislationDocumentDisplayPage.marginal()).toEqual(testData.legislation.sections.fix_section_and_general.document_no);
        
    });
});
