var params = browser.params;
var jiraNumber = 'GCMSQABANG-2099';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);
    browser.driver.manage().window().maximize();

  });
	/*
     * Edit relationship Renumera - Consolidated -Edit fields Relationship
     010 - Edit relationship Renumera - Consolidated -Edit fields Source
     */

  it('Edit relationship Renumera - Consolidated -Edit fields Relationship.' + jiraNumber, function () {

    // search for Renumera rel type in relationship table
    globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.view);
    globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
    browser.waitForAngular();

    relationshippage.filterbyRelType(loadedData.Renumera);
    relationshippage.filterbyConsolidation(loadedData.no);
    browser.waitForAngular();
    // click on edit action
    relationshippage.clickactionOnRelationshipTable(loadedData.edit);
    browser.waitForAngular();

    // change any target fields(part in this case)
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.Partfield, loadedData.part);

    globalpage.clickOnButtonForGlobal(loadedData.save);
    expect(relationshippage.isModalPresent(loadedData.EditModal)).toBe(true);
    browser.sleep(3000);

    relationshippage.closeAddorEditRelationshipPopup();
    // verify if changes reflected in table or not
    expect(relationshippage.isTextFieldpresentTarget(loadedData.changevalue)).toBe(true);

    // change back to previous value
    relationshippage.clickactionOnRelationshipTable(loadedData.edit);
    relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.Partfield, loadedData.part_old);
    globalpage.clickOnButtonForGlobal(loadedData.save);
    relationshippage.closeAddorEditRelationshipPopup();
    browser.waitForAngular();
    globalpage.clickOnNavigationOrCloseButton('close');
  });

});