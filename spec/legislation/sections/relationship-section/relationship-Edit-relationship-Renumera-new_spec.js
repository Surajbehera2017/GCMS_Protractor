var params = browser.params;
var jiraNumber = 'GCMSQABANG-2096';
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
     * 01 - Edit relationship Renumera
     */

  it('01 - Edit relationship Renumera.' + jiraNumber, function () {

    // search for Renumera rel type in relationship table
    // globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.view);
    // globalpage.clickOnNavigationOrCloseButton("close");
    globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.view);
    globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
    globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
    browser.waitForAngular();

    relationshippage.filterbyRelType(loadedData.Renumera);
    relationshippage.filterbyConsolidation(loadedData.no);
    browser.waitForAngular();
    // click on edit action
    relationshippage.clickactionOnRelationshipTable(loadedData.edit);
    browser.sleep(2000);
    //    // verify if modal present or not
    expect(relationshippage.isModalPresent(loadedData.EditModal)).toBe(true);

    //close table and edit window
    relationshippage.closeAddorEditRelationshipPopup();
    relationshippage.closeeditpopupmodal();
    browser.waitForAngular();
    globalpage.clickOnNavigationOrCloseButton('close');

  });

});