


var params = browser.params;
var jiraNumber = 'GCMSQABANG-2112';

var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
  beforeAll(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });


  /*
   *   05 - COPY - Anotaciones - user Analista

   */

  it(' COPY - Anotaciones - user Analista.' + jiraNumber, function () {



    browser.waitForAngular();
    globalpage.expandSectionInLeftPanel(loadedData.sectionName);
    browser.sleep(3000);

    relationshippage.clickonLinkInsideRelationship(loadedData.linkName);
    browser.sleep(3000);
    relationshippage.clickactionOnRelationshipTable(loadedData.action);
    browser.sleep(3000);
    browser.waitForAngular();

    var useranalyst = relationshippage.isAnalystNamePresentFor('native', loadedData.analyst_name);
    expect(useranalyst).toEqual(true);


    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(3000);


    relationshippage.clickOnLensIcon();
    browser.sleep(3000);

    browser.waitForAngular();
//checking the current date
    var isdatepresent = globalpage.getDateAndVerify(loadedData.locator);
    // expect(isdatepresent).toEqual(false);
    browser.sleep(3000);

 });

});