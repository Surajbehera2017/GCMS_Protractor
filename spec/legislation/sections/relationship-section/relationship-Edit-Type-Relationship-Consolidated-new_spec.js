var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
//var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var jiraNumber = 'GCMSQABANG-1900';

var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];


describe('Relationship', function () {
  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });
  /*
     * Edit Type of Relationship - Consolidated
    * 09 - Edit relationship Renumera - Consolidated -Change Type of relationship
   */

  it('Edit Type of Relationship - Consolidated .' + jiraNumber, function () {
    browser.waitForAngular();
    globalfunction.expandSectionInLeftPanel(loadedData.rel_section);
    browser.sleep(2000);
    relationshippage.clickonLinkInsideRelationship(loadedData.consoldation);
    browser.sleep(2000);
    globalfunction.clickOnbuttonInsideSectionTable(loadedData.filterbtn);
    browser.sleep(2000);
    relationshippage.filterbyRelType(loadedData.type);
    browser.sleep(2000);
    relationshippage.clickYESfromConsolidationfilter();
    browser.sleep(2000);
    // globalfunction.selectNoOfRows('1');
    // globalfunction.clickOnbuttonInsideSectionTable(loadedData.editaction);
    //  relationshippage.filterByNewUnitLevel(loadedData.unitlevel);
    // browser.sleep(2000);
    relationshippage.clickactionOnRelationshipTable(loadedData.editaction);
    browser.sleep(2000);
    expect(relationshippage.isModalPresent(loadedData.addmodal)).toEqual(true);
    browser.sleep(2000);
    relationshippage.clickandSelect(loadedData.reltype, loadedData.value);
    browser.sleep(2000);
    relationshippage.clickOnRelPopUpButtons(loadedData.save);
    browser.sleep(2000);
    relationshippage.clickERRORInfoLink();
    browser.sleep(2000);
    globalfunction.gettingTextofelement(loadedData.dialogbox, loadedData.errormsg);
    browser.sleep(2000);
    globalfunction.clickOnButtonForGlobal(loadedData.confirm);
    browser.sleep(2000);
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(1000);
    globalfunction.clickOnButtonForGlobal(loadedData.agree);
    browser.waitForAngular();
    globalfunction.clickOnNavigationOrCloseButton(loadedData.cls_btn);

  });

});