var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');
var legislativeBodyNewDisplay = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');

describe('Legislation-Body', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = false;
    var legisDocEditPage = new LegislationDocumentEditionPage();
    legisDocEditPage.get(testData.legislation.sections.legislativebody.legislative_id);
    legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
});

  it('provision date section order_NEEDS_To_Be_Deleted', function () { 
       
    legislativeBodyNewDisplay.clicklegislative();
    legislativeBodyNewDisplay.clickPlusButtonDate();
       
    var date = legislativeBodyNewDisplay.getTextProvisionDate(); 
    if(date=="Precision")
    expect(legislativeBodyNewDisplay.displayProvisionDate()).toEqual(true);
       
    var connector = legislativeBodyNewDisplay.getTextConnector(); 
    if(connector=="Connector")
    expect(legislativeBodyNewDisplay.displayConnector()).toEqual(true);
     
   });
    
});