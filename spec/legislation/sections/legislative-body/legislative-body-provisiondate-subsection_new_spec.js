var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');
var legislativeBody = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');

describe('Legislation-Body', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = false;
    var legisDocEditPage = new LegislationDocumentEditionPage();
    legisDocEditPage.get(testData.legislation.sections.legislativebody.legislative_id);
    legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
});

   it('complete date format_NEEDS_To_Be_Deleted', function () {
      browser.waitForAngular(); 
     legislativeBody.clicklegislative();
     //legislativeBody.cancelDate(); 
     legislativeBody.clearProvisionDate();
     legislativeBody.enterProvisionDate();
     legislativeBody.clickSave();
     legislativeBody.clickSaveConfirmation()
     legislativeBody.editButton(); 
     
   });
    
   it('complete year format', function () {
      
     legislativeBody.clicklegislative();
     legislativeBody.selectYear();
     legislativeBody.clearProvisionDate();
     legislativeBody.enterYear();
     legislativeBody.clickSave();
     legislativeBody.clickSaveConfirmation();
     legislativeBody.editButton();
   });
    
  it('complete month format', function () {
     
     legislativeBody.clicklegislative();
     legislativeBody.selectMonth();
     legislativeBody.clearProvisionDate();
     legislativeBody.enterMonth();
     legislativeBody.clickSave();
     legislativeBody.clickSaveConfirmation();
     legislativeBody.editButton();
   });
    
    it('complete incorrect format', function () {
     legislativeBody.clicklegislative();
     legislativeBody.selectIncorrectDate();
     legislativeBody.clearProvisionDate();
     legislativeBody.enterIncorrectDate();
     legislativeBody.clickSave();
     
   }); 
  });