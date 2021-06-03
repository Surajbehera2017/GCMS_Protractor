var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');
var legislativeBodyNewDisplay = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');

var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-3061';
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Legislation-Body', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    legislativebody.urlLoad(params.valid_username,params.valid_password);

    
});
    it('legislative number section order.'+jiraNumber, function () {
    
    //legislativeBodyNewDisplay.clickLegislativeNumber();
    global.expandSectionInLeftPanel('Statute Data');
    browser.sleep(5000);
    var number = legislativebodyEditionNew.getNoteYear(); 
    var Header = legislativebodyEditionNew.getDocumentHeaderYear();
    browser.sleep(5000);
    //if(number=="NUM")
    expect(number).toEqual(Header);
    /*var connector = legislativeBodyNewDisplay.getTextLegislativeConnector(); 
    if(connector=="Connector")
    expect(legislativeBodyNewDisplay.displayLegislativeConnector()).toEqual(true);*/     
   });
    
});