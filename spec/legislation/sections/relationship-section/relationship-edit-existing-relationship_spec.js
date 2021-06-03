var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-2129';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {



  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });

  it('edit_existing_relationships.' + jiraNumber, function () {

    browser.waitForAngular();
    globalfunction.clickOnSectionButton(loadedData.secname,loadedData.viewbtn);
    browser.sleep(2000);
    globalfunction.clickOnbuttonInsideSectionTable(loadedData.filters);
    browser.sleep(2000);
    relationshippage.filterbyRelType(loadedData.rel_type);
    browser.sleep(2000)
    relationshippage.clickNOfromConsolidationfilter();
    browser.sleep(2000);
    relationshippage.filterbyTargetUnitlevel(loadedData.levelval);
    browser.sleep(2000);
    globalfunction.selectNoOfRows('1');
    browser.sleep(2000);
    relationshippage.clickonEditButtonInRelTable();
    browser.sleep(2000);
    expect(relationshippage.isModalPresent(loadedData.addmod)).toEqual(true);
    browser.sleep(2000);
    relationshippage.sendValueTo(loadedData.panel_tar,loadedData.Codefield,loadedData.Code);
    browser.sleep(2000);
    relationshippage.sendValueTo(loadedData.panel_tar,loadedData.Yearfield,loadedData.Year);
    browser.sleep(2000);
    relationshippage.sendValueTo(loadedData.panel_tar,loadedData.numfield,loadedData.number);
    browser.sleep(2000);
    relationshippage.clickOnRelPopUpButtons(loadedData.save);
    browser.sleep(2000);
    var loc = relationshippage.isRelationshipAddedInCollector();
    expect(loc).toEqual(true);

    browser.actions().sendKeys(protractor.Key.ESCAPE).perform(); 

    globalfunction.clickOnNavigationOrCloseButton(loadedData.closebutton);

    

      // browser.driver.manage().window().maximize();
      // browser.waitForAngular();
      // relationshippage.expandRelationshipTable();
      // browser.waitForAngular();
      // relationshippage.clickOnShowFilterTopic();
      // relationshippage.enterRelationshiptypeinFilter(testData.legislation.sections.relationShip.edit_existing_relationships.rel_type);
      // relationshippage.selectConsildatedFilterN();
      // relationshippage.clickDownArrow(0);
      // relationshippage.clickDropDownEditOption(0);
      // relationshippage.enterYear(testData.legislation.sections.relationShip.edit_existing_relationships.year);
      // relationshippage.enterN(testData.legislation.sections.relationShip.edit_existing_relationships.n_no);
      // relationshippage.clickSaveButton();
      // var err_msg=relationshippage.checkERRORInfoLink();
      // expect(err_msg).toBe(false);
  });
 });