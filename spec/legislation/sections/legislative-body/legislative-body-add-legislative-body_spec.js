var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2347';
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]

describe('Legislation-Body', function ()

{

	beforeAll(function () {
        
    browser.ignoreSynchronization = false;
    var legisDocEditPage = new LegislationDocumentEditionPage();
    legisDocEditPage.get(loadedData.marginal_id);
    legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
       
   });

   it ('should add new legislative body below privious one.'+jiraNumber,function (){

    global.expandSectionInLeftPanel('Statute Data');
    expect(legislativebodyEdition.isExpanded()).toEqual(true);
    expect(legislativebodyEdition.haslegisaddButton()).toEqual(true);
    legislativebodyEdition.clickDeleteLegislativeBodyList();
    browser.waitForAngular();
    legislativebodyEdition.ClicklegisaddButton();
    expect(legislativebodyEdition.haslegislativeSecondaryBody()).toEqual(true);
    legislativebodyEdition.ClicklegislativeSecondaryBody();
    legislativebodyEdition.addlegislativebody(loadedData.legis_list_value);
    browser.sleep(3000);
    legislativebodyEdition.clickSearchButtonLegislativeSecondaryBody();
    browser.sleep(3000);
    legislativebodyEdition.clickItemList();
    browser.sleep(3000);
    LegislationDocumentEditionPageObject.save();
    browser.waitForAngular();
    expect(legislativebodyEdition.title()).toEqual(I18n.legisDocDisplay.title);
    
    });    
});
      
	












