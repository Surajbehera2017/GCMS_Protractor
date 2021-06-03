var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var jiraNumber = 'GCMSQABANG-2135';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];

describe('Relationship', function () {
beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });
    
  it('Edition of an existing one - Target- Level.' + jiraNumber, function(){
    
    browser.waitForAngular();
  globalfunction.clickOnSectionButton(loadedData.secname,loadedData.viewtable);
    browser.sleep(2000);
    globalfunction.clickOnbuttonInsideSectionTable(loadedData.filters);
    browser.sleep(2000);
    relationshippage.filterbyRelType(loadedData.typerel);
    browser.sleep(2000);
    relationshippage.clickYESfromConsolidationfilter();
    browser.sleep(2000);
    globalfunction.selectNoOfRows('1');
    browser.sleep(2000);
    relationshippage.clickactionOnRelationshipTable(loadedData.edit);
    browser.sleep(2000);
    expect(relationshippage.isModalPresent(loadedData.addmod)).toEqual(true);
    // relationshippage.clearlevelfieldofTarget();
    // browser.sleep(2000);
    relationshippage.sendValueTo(loadedData.tarpanel,loadedData.lev_field,loadedData.lev_value);
    browser.sleep(2000);
    relationshippage.clickOnRelPopUpButtons(loadedData.savebtn);
    browser.sleep(2000);
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(1000);
    globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);

});
});
