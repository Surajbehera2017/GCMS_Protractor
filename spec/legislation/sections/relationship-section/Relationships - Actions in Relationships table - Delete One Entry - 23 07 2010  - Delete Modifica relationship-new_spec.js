var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-1914';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {



  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });



	/*
     * TC03 - Relationships - Actions in Relationships table - Delete One Entry - 23 07 2010  - Delete Modifica relationship
     */

  it('Relationships - Actions in Relationships table - Delete One Entry - 23 07 2010  - Delete Modifica relationship.' + jiraNumber, function () {

    browser.waitForAngular();
    globalfunction.clickOnSectionButton(loadedData.sectionname, loadedData.addbtn);
    browser.waitForAngular();
    relationshippage.clickandSelect(loadedData.fieldtype, loadedData.value);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.codefield, loadedData.code);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.yearfield, loadedData.year);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.numfield, loadedData.number);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.unitfield, loadedData.unitvalue);
    browser.waitForAngular();
    relationshippage.clickOnRelPopUpButtons(loadedData.addrel);
    browser.waitForAngular();
    var loc = relationshippage.isRelationshipAddedInCollector();
    expect(loc).toEqual(true);
  });

  //adding one more modifica relationship
  it('Relationships - Actions in Relationships table - Delete One Entry - 23 07 2010  - Delete Modifica relationship.' + jiraNumber, function () {
    browser.waitForAngular();
    globalfunction.clickOnSectionButton(loadedData.sectionname, loadedData.addbtn);
    browser.waitForAngular();
    relationshippage.clickandSelect(loadedData.fieldtype, loadedData.value);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.codefield, loadedData.code_1);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.yearfield, loadedData.year_1);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.numfield, loadedData.number_1);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.body, loadedData.bodyvalue);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.unitfield, loadedData.unitvalue_1);
    browser.waitForAngular();
    relationshippage.sendValueTo(loadedData.panel, loadedData.partfield, loadedData.partvalue);
    browser.waitForAngular();
    relationshippage.clickOnRelPopUpButtons(loadedData.addrel);
    browser.waitForAngular();
    var loc = relationshippage.isRelationshipAddedInCollector();
    expect(loc).toEqual(true);


  });

  //deleting the newly created modifica relationships
  it('Relationships - Actions in Relationships table - Delete One Entry - 23 07 2010  - Delete Modifica relationship.' + jiraNumber, function () {
    browser.waitForAngular();
    globalfunction.clickOnSectionButton(loadedData.sectionname, loadedData.viewbtn);
    browser.waitForAngular();
    relationshippage.clickShowRelationshipfilter();
    browser.waitForAngular();
    relationshippage.filterbyRelType(loadedData.mod_type);
    browser.waitForAngular();
    relationshippage.clickNOfromConsolidationfilter();
    browser.waitForAngular();
    relationshippage.filterbyTargetUnitlevel(loadedData.firstunit);
    browser.sleep(2000);
    globalfunction.selectNoOfRows('1');
    browser.waitForAngular();
    globalfunction.clickOnbuttonInsideSectionTable(loadedData.delbtn);
    browser.sleep(2000);
    relationshippage.clickOnYesButton();
    browser.sleep(2000);
    globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);
    browser.sleep(2000);
    globalfunction.clickOnSectionButton(loadedData.sectionname, loadedData.viewbtn);
    browser.waitForAngular();
    relationshippage.clickShowRelationshipfilter();
    browser.waitForAngular();
    relationshippage.filterbyRelType(loadedData.mod_type);
    browser.waitForAngular();
    relationshippage.clickNOfromConsolidationfilter();
    browser.waitForAngular();
    relationshippage.filterbyTargetUnitlevel(loadedData.sec_unit);
    browser.sleep(2000);
    globalfunction.selectNoOfRows('1');
    browser.waitForAngular();
    globalfunction.clickOnbuttonInsideSectionTable(loadedData.delbtn);
    browser.sleep(2000);
    relationshippage.clickOnYesButton();
    browser.sleep(2000);
    globalfunction.clickOnNavigationOrCloseButton(loadedData.closebtn);
    browser.sleep(2000);
  });


});